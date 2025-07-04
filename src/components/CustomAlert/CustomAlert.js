import React, { useState } from 'react';
import classnames from "classnames";
import { Alert } from 'reactstrap';

import infoIcon from '../../assets/notifications/infoIcon.svg';
import warningIcon from '../../assets/notifications/warningIcon.svg';
import successIcon from '../../assets/notifications/successIcon.svg';
import dangerIcon from '../../assets/notifications/successIcon.svg';
import s from './CustomAlert.module.scss';

const alerts = {
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

export default function CustomAlert({ ...props }) {

  const [alertOpen, setAlertClose] = useState(true)

  const closeAlert = () => {
    setAlertClose(!alertOpen)
  }

  const alertStyle = () => {
    return props.transparent
      ? {backgroundColor: alerts[props.type].transparentColor, color: alerts[props.type].color}
      : {backgroundColor: alerts[props.type].color}
  }

  return (
    <>
      <Alert
        className={classnames(s.alertContainer, {'alert-rounded': props.rounded})}
        style={alertStyle()}
        isOpen={alertOpen}
        toggle={() => closeAlert()}
      ><div className={s.alertIconContainer}>
          {props.withIcon && <img src={alerts[props.type].icon} alt="..."/>}
        </div>
        <div className={s.messageContainer}>
          {props.withMessage && <span dangerouslySetInnerHTML={{__html: alerts[props.type].message}}></span>}
          {props.children}
        </div>
      </Alert>
    </>
  )
};


