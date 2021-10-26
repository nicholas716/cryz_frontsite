import React from 'react'

// styles
import styles from 'components/components/dashboard/message/MessageVideo01.module.scss'

const MessageVideo01 = props => {
  const { message } = props
  return (
    <div className={styles.container}>
      <video width={167} controls>
        <source src={message.url} type="video/mp4" />
        <source src={message.url} type="video/ogg" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default MessageVideo01