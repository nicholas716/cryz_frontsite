import React from 'react'
import Image from 'next/image'
import router from 'next/router'

// images
import backGrayIcon from 'public/images/arrow-left-gray.svg'

// styles
import styles from 'components/components/BackButton.module.scss'

const BackButton = () => {
  return (
    <button className="flex justify-between items-center" onClick={() => router.back()}>
      <Image src={backGrayIcon} alt="" width={20} height={15} />
      <p className={styles.back}>Volver</p>
    </button>
  )
}

export default BackButton