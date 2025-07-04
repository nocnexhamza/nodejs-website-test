import React, { useState } from 'react';
import { Alert } from 'reactstrap';

import infoIcon from '../../assets/notifications/infoIcon.svg';
import warningIcon from '../../assets/notifications/warningIcon.svg';
import successIcon from '../../assets/notifications/successIcon.svg';
import dangerIcon from '../../assets/notifications/successIcon.svg';
import s from './Notification.module.scss';

const notifications = {
  info: {
    icon: infoIcon,
    message: "<span class='body-2'>Info:</span> This alert needs your attention, but it's not important.",
    color: "#00A5FF",
    transparentColor: "#00A5FF50",
  },
  warning: {
    icon: warningIcon,
    message: "<span class='body-2'>Warning:</span> Best check yourself, you're not looking too good.",
    color: "#FFA100",
    transparentColor: "#FFA10050",
  },
  success: {
    icon: successIcon,
    message: "<span class='body-2'>Success:</span> You successfully read this important alert message.",
    color: "#43BC13",
    transparentColor: "#43BC1350",
  },
  error: {
    icon: dangerIcon,
    message: "<span class='body-2'>Danger:</span> Danger: Change this and that and try again.",
    color: "#FF4B23",
    transparentColor: "#FF4B2350",
  },
}

export default function Notification(props) {

  const [notificationOpen, setNotificationClose] = useState(true)

  const closeNotification = () => {
    setNotificationClose(!notificationOpen)
  }

  const notificationStyle = () => {
    return props.transparent
      ? {backgroundColor: notifications[props.type].transparentColor, color: notifications[props.type].color}
      : {backgroundColor: notifications[props.type].color}
  }

  return (
    <>
      <Alert
        className={s.notificationContainer}
        style={notificationStyle()}
        isOpen={notificationOpen}
        toggle={() => closeNotification()}
      >
        <div className={s.notificationIconContainer}>
          {props.withIcon && <img src={notifications[props.type].icon} alt="..."/>}
        </div>
        <div className={s.messageContainer}>
          <span dangerouslySetInnerHTML={{__html: notifications[props.type].message}}></span>
        </div>
      </Alert>
    </>
  )
};


