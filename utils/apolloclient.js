import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import * as Sentry from '@sentry/nextjs'
import { SentryLink } from 'apollo-link-sentry'
import { Auth } from 'aws-amplify'
import router from 'next/router'
import toast from 'react-hot-toast'

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT, // Apollo Server is served from port 8000
  headers: {
    'keep-alive': 'true',
  },
  //   credentials: 'same-origin', // if your backend is a different domain. 'include'
})

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await Auth.currentSession()
    return {
      headers: {
        ...headers,
        authorization: token ? `${token.idToken.jwtToken}` : '',
      },
    }
  } catch (e) {
    return {
      headers: {
        ...headers,
        authorization: '',
      },
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  Sentry.captureException(graphQLErrors)
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      if (message === 'UNAUTHENTICATED') {
        toast.error(message)
        client.resetStore()
        client.clearStore()
        Auth.signOut()
        localStorage.clear()
        router.push('/login')
        // if (!Boolean(localStorage.getItem('remember'))) {
        //   localStorage.removeItem('email')
        //   localStorage.removeItem('password')
        //   localStorage.removeItem('patient_id')
        // }
      }
    })

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
    Sentry.captureException(networkError)
    if (networkError.statusCode === 401) {
      client.resetStore()
      client.clearStore()
    }
  }
})

const client = new ApolloClient({
  link: from([new SentryLink(), authLink, errorLink, uploadLink]),
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'cache-and-network',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
})

export default client
