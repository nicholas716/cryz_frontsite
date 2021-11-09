import React from 'react'
import Image from 'next/image'
import styles from './NewMessageBox.module.scss'
import messageBoxIcon from 'public/images/message-box.svg'
import meesageRightIcon from 'public/images/message-right.svg'

const NewMessageBox = ({ handleClickMessage, name, content }) => {
  return (
    <div
      className={'flex justify-between p-4 px-7 rounded-xl hover:bg-gray-200 cursor-pointer ' + styles.bodyInfo}
      onClick={handleClickMessage}
    >
      <Image src={messageBoxIcon} width={24} height={24} alt="" />
      <div className={'flex flex-col justify-between'}>
        <div className={styles.mediumBoldLabel}>{name}</div>
        <div className={styles.mediumLabel}>{content}</div>
      </div>
      <Image src={meesageRightIcon} width={8} height={10} alt="" />
    </div>
  )
}

export default NewMessageBox
