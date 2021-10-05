import React from 'react'
import Image from 'next/image'
import styles from './ClassCard.module.scss'

const ClassCard = props => {
  const { data } = props

  return (
    <div className={styles.singleCard}>
      <div className={styles.cardImage}>
        <Image src={data?.image} alt="" width={365} height={253} />
        <div className={styles.cardPayment}>
          <span className={styles.cardPaymentType}>{data?.paymentType}s</span>
        </div>
      </div>
      <div className={styles.cardTitle}>{data?.title}</div>
      <div className={styles.cardDescripton}>{data?.description}</div>
      <div className={styles.cardName}>{data?.name}</div>
    </div>
  )
}

export default ClassCard