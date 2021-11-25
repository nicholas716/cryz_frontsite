import React, { useState, useEffect } from 'react'

// redux
import { useDispatch } from 'react-redux'

// next components
import { useRouter } from 'next/router'

// custom components
import PrimaryLayout from 'components/Layout/PrimaryLayout'
import CircularMark from 'components/components/CircularMark'
import CarouselService from 'components/components/service/CarouselService'
import ArrowButton from 'components/components/service/ArrowButton'
import BackButton from 'components/components/BackButton'
import ReadMoreButton from 'components/components/ReadMoreButton'

// styles
import globlaStyle from 'styles/GlobalStyles.module.scss'
import styles from './nutrition.module.scss'

import { useLazyQuery } from '@apollo/client'
import graphql from 'crysdiazGraphql'

const Nutrition = () => {
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

  // variables
  const router = useRouter()
  const [getCmsServiceSubject, { data: cmsSubjectData, loading: cmsSubjectLoading, error: cmsSubjectError }] =
    useLazyQuery(graphql.queries.getCmsServiceSubject)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [sliderData, setSliderData] = useState([])
  const [readMoreCurrentState, setReadMoreCurrentState] = useState('less')

  // handlers
  useEffect(() => {
    getCmsServiceSubject({
      variables: {
        discipline_id: 3,
      },
    })
  }, [])

  useEffect(() => {
    if (!cmsSubjectError && cmsSubjectData && cmsSubjectData.getCmsServiceSubject) {
      setTitle(cmsSubjectData.getCmsServiceSubject.title_two)
      setDescription(cmsSubjectData.getCmsServiceSubject.text)
      setSliderData(cmsSubjectData.getCmsServiceSubject.images)
    }
  }, [cmsSubjectLoading, cmsSubjectData, cmsSubjectError])

  const handleClickBuyPersion = () => {
    router.push('/buy/buy-person')
  }
  const handleClickBuyPlan = () => {
    router.push('/buy/buy-plans-online')
  }

  const handleReadMore = state => {
    setReadMoreCurrentState(state)
  }

  return (
    <div className={styles.container}>
      <div className={'flex flex-wrap justify-center pb-20'}>
        <div className={globlaStyle.container}>
          <div className={'mt-9'}>
            <BackButton />
          </div>
          <div className={'grid grid-cols-12 gap-4'}>
            <div className={'col-span-12 md:col-span-5 sm:col-span-12 '}>
              <div className={'pt-10 pb-2 ' + styles.topTitle}>{title}</div>
              <div className={styles.topDash} />
              <div className={styles.topDescription + ' mt-10 pb-20'}>
                <div
                  className={'relative ' + styles.text + ' ' + (readMoreCurrentState === 'less' ? '' : styles.expand)}
                >
                  <div dangerouslySetInnerHTML={{ __html: description }}></div>
                  <ReadMoreButton currentState={readMoreCurrentState} onClick={state => handleReadMore(state)} />
                </div>
              </div>
            </div>
            <div className={'col-span-12 md:col-span-7 sm:col-span-12 relative flex justify-end'}>
              <div className={'absolute top-10 z-10'}>
                <CircularMark />
              </div>
              <div className={styles.carouselSection}>
                <CarouselService sliderData={sliderData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex justify-start'}>
        <div className={'w-1/3'}>
          <ArrowButton label={'Compra presenciales'} onClick={handleClickBuyPersion} type={'nutrition'} />
        </div>
        <div className={'w-1/3'}>
          <ArrowButton label={'Compra planes online'} onClick={handleClickBuyPlan} type={'nutrition'} />
        </div>
      </div>
    </div>
  )
}
export default Nutrition

Nutrition.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
