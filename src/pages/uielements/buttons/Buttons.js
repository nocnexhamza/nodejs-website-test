import React from "react";
import {
  Col,
  Row,
  Button,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import OutlineStar from "../../../assets/buttons/OutlineStarIcon.js";

import s from "./Buttons.module.scss";

export default function Buttons() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Rounded Buttons</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Bootstrap includes predefined button styles, each serving its own semantic purpose.
                  Use <code>btn-rounded</code> class to make button rounded.
                </div>
                <div className={s.buttonsBlock}>
                  <Button color="primary" className="btn-rounded">Primary</Button>
                  <Button className="btn-rounded">Default</Button>
                  <Button color="secondary-red" className="btn-rounded">Sec. Red</Button>
                  <Button color="secondary-yellow" className="btn-rounded">Sec. Yellow</Button>
                  <Button color="secondary-cyan" className="btn-rounded">Sec. Cyan</Button>
                  <Button color="success" className="btn-rounded">Success</Button>
                  <Button color="info" className="btn-rounded">Info</Button>
                  <Button color="warning" className="btn-rounded">Warning</Button>
                  <Button color="danger" className="btn-rounded">Danger</Button>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Outlined Rounded Buttons</div>
                <div className="mt-2 mb-3 body-3 muted">
                  In need of a button, but not the hefty background colors they bring?
                  Use <code>outline</code> property to remove all
                  background colors on any button.
                </div>
                <div className={s.buttonsBlock}>
                  <Button outline color="primary" className="btn-rounded">Primary</Button>
                  <Button outline className="btn-rounded">Default</Button>
                  <Button outline color="secondary-red" className="btn-rounded">Sec. Red</Button>
                  <Button outline color="secondary-yellow" className="btn-rounded">Sec. Yellow</Button>
                  <Button outline color="secondary-cyan" className="btn-rounded">Sec. Cyan</Button>
                  <Button outline color="success" className="btn-rounded">Success</Button>
                  <Button outline color="info" className="btn-rounded">Info</Button>
                  <Button outline color="warning" className="btn-rounded">Warning</Button>
                  <Button outline color="danger" className="btn-rounded">Danger</Button>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Default Buttons</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Use any of the available button classes to quickly create a styled button. Semantically distinguishable beauty.
                </div>
                <div className={s.buttonsBlock}>
                  <Button color="primary" >Primary</Button>
                  <Button>Default</Button>
                  <Button color="secondary-red">Sec. Red</Button>
                  <Button color="secondary-yellow">Sec. Yellow</Button>
                  <Button color="secondary-cyan">Sec. Cyan</Button>
                  <Button color="success">Success</Button>
                  <Button color="info">Info</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Outlined Default Buttons</div>
                <div className="mt-2 mb-3 body-3 muted">
                  This is the default button style, but you can make them more rounded.
                  Use whichever button shape you like best.
                </div>
                <div className={s.buttonsBlock}>
                  <Button outline color="primary" >Primary</Button>
                  <Button outline>Default</Button>
                  <Button outline color="secondary-red">Sec. Red</Button>
                  <Button outline color="secondary-yellow">Sec. Yellow</Button>
                  <Button outline color="secondary-cyan">Sec. Cyan</Button>
                  <Button outline color="success">Success</Button>
                  <Button outline color="info">Info</Button>
                  <Button outline color="warning">Warning</Button>
                  <Button outline color="danger">Danger</Button>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Buttons With Icons</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Do more with icons! Icons or Icon components may be used in buttons.
                  Let your buttons be more informative and enjoyable!
                </div>
                <div className={s.buttonsBlock}>
                  <Button color="primary" className="btn-rounded with-icon"><OutlineStar/>Primary</Button>
                  <Button className="btn-rounded with-icon"><OutlineStar/>Default</Button>
                  <Button color="secondary-red" className="btn-rounded with-icon"><OutlineStar/>Sec. Red</Button>
                  <Button color="secondary-yellow" className="btn-rounded with-icon"><OutlineStar/>Sec. Yellow</Button>
                  <Button color="secondary-cyan" className="btn-rounded with-icon"><OutlineStar/>Sec. Cyan</Button>
                  <Button color="success" className="btn-rounded with-icon"><OutlineStar/>Success</Button>
                  <Button color="info" className="btn-rounded with-icon"><OutlineStar/>Info</Button>
                  <Button color="warning" className="btn-rounded with-icon"><OutlineStar/>Warning</Button>
                  <Button color="danger" className="btn-rounded with-icon"><OutlineStar/>Danger</Button>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Outlined Buttons With Icons</div>
                <div className="mt-2 mb-3 body-3 muted">
                  In need of a button, but not the hefty background colors they bring?
                  Use <code>outline</code> property, add icon. Style the buttons however you like!
                </div>
                <div className={s.buttonsBlock}>
                  <Button outline color="primary" className="btn-rounded with-icon"><OutlineStar/>Primary</Button>
                  <Button outline color="secondary" className="btn-rounded with-icon"><OutlineStar/>Default</Button>
                  <Button outline color="secondary-red" className="btn-rounded with-icon"><OutlineStar/>Sec. Red</Button>
                  <Button outline color="secondary-yellow" className="btn-rounded with-icon"><OutlineStar/>Sec. Yellow</Button>
                  <Button outline color="secondary-cyan" className="btn-rounded with-icon"><OutlineStar/>Sec. Cyan</Button>
                  <Button outline color="success" className="btn-rounded with-icon"><OutlineStar/>Success</Button>
                  <Button outline color="info" className="btn-rounded with-icon"><OutlineStar/>Info</Button>
                  <Button outline color="warning" className="btn-rounded with-icon"><OutlineStar/>Warning</Button>
                  <Button outline color="danger" className="btn-rounded with-icon"><OutlineStar/>Danger</Button>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
