import React  from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Widget from '../../../components/Widget/Widget.js';
import CustomAlert from "../../../components/CustomAlert/CustomAlert.js";
import s from "./Alerts.module.scss";

const alertTypes = ["info", "success", "warning", "error"];

export default function Alerts() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4 gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Alert Messages
                </div>
                <p className="mb-3 body-3 muted">
                  Alerts are available for any length of text, as well as an optional dismiss button.
                </p>
                {alertTypes.map((notification, index) => (
                  <CustomAlert
                    key={index}
                    type={notification}
                    withIcon
                    withMessage
                  />
                ))}
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Transparent Alerts
                </div>
                <p className="mb-3 body-3 muted">
                  Transparent alerts are available by adding <code>transparent</code> property.
                </p>
                {alertTypes.map((notification, index) => (
                  <CustomAlert
                    key={index}
                    type={notification}
                    transparent
                    withMessage
                  />
                ))}
              </Widget>
            </Col>
          </Row>
          <Row className="mb-4 gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Additional Content
                </div>
                <p className="mb-3 body-3 muted">
                  Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
                </p>
                <CustomAlert type="info">
                  <div className={s.customAlert}>
                    <p className="headline-2">Well Done!</p>
                    <p>
                      This is an example of a custom alert. You can nest other elements in it and style it however you want.
                    </p>
                    <hr/>
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                  </div>
                </CustomAlert>
                <CustomAlert type="success" transparent rounded withIcon>
                  <div className={s.customAlert}>
                    <p className="headline-2">Hint!</p>
                    <p>
                      You can also make this element transparent, add an icon and round the edges.
                    </p>
                  </div>
                </CustomAlert>
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Rounded Alerts
                </div>
                <p className="mb-3 body-3 muted">
                  Rounded alerts are available by adding <code>rounded</code> property. You also can add informative icon to alert by adding <code>withIcon</code> property.
                </p>
                {alertTypes.map((notification, index) => (
                  <CustomAlert
                    className="alert-rounded"
                    key={index}
                    type={notification}
                    withIcon
                    withMessage
                    rounded
                  />
                ))}
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
