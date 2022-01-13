import React, { useEffect, useState } from 'react'

// redux
import { useDispatch } from 'react-redux'

// next components
import Image from 'next/image'

// third party components1
import ReactPlayer from 'react-player'

// custom components
import SecondaryLayout from 'components/Layout/SecondaryLayout'
import MobileDashboardLayout from 'components/Layout/MobileDashboardLayout'
// import NotificationButton from 'components/components/dashboard/NotificationButton'
import VideoChat from 'components/components/dashboard/Twilio/VideoChat'
// import Profile from 'components/components/dashboard/Profile'

// styles
import styles from './LiveStreaming.module.scss'

// json data
import LiveStreamingData from 'assets/data/LiveStreamingData.json'
import router from 'next/router'

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
  const [room, setRoom] = useState('')
  const [event, setEvent] = useState({ id: -1, start: '' })
  const [material, setMaterial] = useState([])

  useEffect(() => {
    if (router.query.id) {
      setEvent({ id: Number(router.query.id) })
    }
    setMaterial(LiveStreamingData)
  }, [router.query])

  const handleOnChangeRoom = room => {
    setRoom(room)
  }

  return (
    <div className={'pt-7 lg:pl-14 lg:pr-8 h-screen ' + styles.container}>
      <div className={'grid grid-cols-12 gap-6'}>
        <div className={'col-span-12 lg:col-span-9'}>
          {viewport !== 'mobile' && <div className={styles.title}>1 to 1 Streaming</div>}
          <div className={'pt-4 lg:pt-14'}>
            {/* <ReactPlayer url={url} width="100%" height="100%" className={styles.reactPlayer} controls={true} /> */}
            <VideoChat sessionId={event.id} viewport={viewport} onChangeRoom={room => handleOnChangeRoom(room)} />
          </div>
        </div>
        <div className={'col-span-12 md:col-span-3 sm:col-span-12'}>
          {/* <div className={'flex justify-end items-center'}>
            <NotificationButton />
            <Profile />
          </div> */}
          <div className={'rounded-xl bg-white py-8 px-8 pb-10 mt-10'}>
            <div className={styles.material}>Material necesario</div>
            <div className={'pt-7'}>
              {material.map((item, index) => (
                <div className={'flex justify-start py-2'} key={index}>
                  <div className={styles.imageArea}>
                    <Image src={item.url} alt="" width={56} height={56} objectFit="cover" objectPosition="center" />
                  </div>
                  <div className={'pl-4 flex flex-col justify-around'}>
                    <div className={styles.label}>{item.label}</div>
                    <div className={styles.count}>{item.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
