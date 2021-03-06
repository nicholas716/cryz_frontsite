// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'
import { excludeGraphQLFetch } from 'apollo-link-sentry'
import SentryRRWeb from "@sentry/rrweb"

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN || 'https://350deffa38674bf7a99a2fcd0d31d5ef@sentry.gosuac.com/4',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
  release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV,
  beforeBreadcrumb: excludeGraphQLFetch,
  integrations: [
    new SentryRRWeb({
      // ...options
    }),
  ],
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
