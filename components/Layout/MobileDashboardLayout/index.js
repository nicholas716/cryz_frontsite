import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

// third party components
import ReactLoading from 'react-loading'

// custom components
import MobileDashboardHeader from 'components/Header/MobileDashboardHeader'
import MobileDashboardFooter from 'components/Footer/MobileDashboardFooter'

// styles
import globalStyles from 'styles/GlobalStyles.module.scss'

const MobileDashboardLayout = ({ title, children }) => {
  const router = useRouter()
  const [showHeader, setShowHeader] = useState(true)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    showHeaderBar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  useEffect(() => {
    showHeaderBar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showHeaderBar = () => {
    const currentState = router.asPath.split('#')
    const otherState = router.pathname.split('/')

    if (
      currentState[1] === 'health' ||
      currentState[1] === 'graphic' ||
      currentState[1] === 'personal' ||
      otherState[2] === 'billing' ||
      otherState[2] === 'shopping' ||
      (otherState[2] === 'academy' && otherState[3] !== undefined)
    ) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }
  }

  return (
    <>
      {showHeader ? <MobileDashboardHeader title={title} /> : <></>}
      {showHeader ? <main style={{ marginTop: '56px' }}>{children}</main> : <main>{children}</main>}
      <MobileDashboardFooter />
      {isLoading && (
        <div className={globalStyles.loadingArea}>
          <div className={globalStyles.loading}>
            <ReactLoading type={'spinningBubbles'} color="#006600" />
          </div>
        </div>
      )}
    </>
  )
}

export default MobileDashboardLayout
