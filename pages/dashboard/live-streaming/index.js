import React, { useEffect, useState } from 'react'

// redux
import { useDispatch } from 'react-redux'

// next components
import Image from 'next/image'
import { useRouter } from 'next/router'

// custom components
import SecondaryLayout from 'components/Layout/SecondaryLayout'
import MobileDashboardLayout from 'components/Layout/MobileDashboardLayout'
import VideoChat from 'components/Dashboard/Twilio/VideoChat'

// styles
import styles from './LiveStreaming.module.scss'

// graphql
import { useLazyQuery } from '@apollo/client'
import graphql from 'crysdiazGraphql'

const LiveStreaming = props => {
  // loading part ###########################
  const dispatch = useDispatch()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (isMounted === true) {
      dispatch({ type: 'set', isLoading: false })
    }
  }, [isMounted, dispatch])
  // loading part end #######################

  // variable
  const { viewport } = props
  const router = useRouter()
  const [room, setRoom] = useState('')
  const [event, setEvent] = useState({ id: -1, start: '' })
  const [type, setType] = useState('')
  const [material, setMaterial] = useState([])
  const [
    getSessionMaterialByDashboard,
    { data: sessionMaterialData, loading: sessionMaterialLoading, error: sessionMaterialError },
  ] = useLazyQuery(graphql.queries.getSessionMaterialByDashboard)

  // handlers
  useEffect(() => {
    if (router.query.id) {
      setEvent({ id: router.query.id })
    }
    setType(router.query.type)
  }, [router.query])

  useEffect(() => {
    if (event.id !== -1) {
      if (event.id.split('-')[0] !== 'academy')
        getSessionMaterialByDashboard({
          variables: {
            session_id: Number(event.id),
          },
        })
    }
  }, [getSessionMaterialByDashboard, event])

  useEffect(() => {
    if (!sessionMaterialError && sessionMaterialData && sessionMaterialData.getSessionMaterialByDashboard) {
      setMaterial(sessionMaterialData.getSessionMaterialByDashboard)
    }
  }, [sessionMaterialLoading, sessionMaterialData, sessionMaterialError])

  const handleOnChangeRoom = room => {
    setRoom(room)
  }

  return (
    <div className={'pt-7 lg:pl-14 lg:pr-8 ' + styles.container}>
      <div className={'grid grid-cols-12 gap-6'}>
        <div className={type !== 'academy' ? 'col-span-12 lg:col-span-9' : 'col-span-12'}>
          {viewport !== 'mobile' && <div className={styles.title}>1 to 1 Streaming</div>}
          <div className={'pt-4 lg:pt-14'}>
            <VideoChat
              sessionId={event.id}
              viewport={viewport}
              onChangeRoom={room => handleOnChangeRoom(room)}
              type={type}
            />
          </div>
        </div>
        {type !== 'academy' && (
          <div className={'col-span-12 md:col-span-3 sm:col-span-12'}>
            <div className={'rounded-xl bg-white py-8 px-8 pb-10 mt-10'}>
              <div className={styles.material}>Material necesario</div>
              <div className={'pt-7'}>
                {material.map((item, index) => (
                  <div className={'flex justify-start py-2'} key={index}>
                    <div className={'pl-4 flex flex-col justify-around'}>
                      <div className={styles.label}>{item.name}</div>
                      <div className={styles.count}>{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default LiveStreaming

LiveStreaming.getLayout = function getLayout(page) {
  return page.props.viewport === 'mobile' ? (
    <MobileDashboardLayout title="1 to 1 Streaming">{page}</MobileDashboardLayout>
  ) : (
    <SecondaryLayout>{page}</SecondaryLayout>
  )
}
