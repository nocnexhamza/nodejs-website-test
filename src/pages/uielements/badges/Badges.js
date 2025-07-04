import React from "react";
import {
  Col,
  Row,
  Badge
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import StarIcon from "../../../assets/badges/StarIcon.js";
import s from "./Badges.module.scss";

export default function Badges() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges</div>
                <div className="mt-2 mb-3 body-3 muted">Add modifier <code>color="*"</code> property to change the appearance of a badge. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge color="primary">Primary</Badge>
                  <Badge>Default</Badge>
                  <Badge color="secondary-red">Sec. Red</Badge>
                  <Badge color="secondary-yellow">Sec. Yellow</Badge>
                  <Badge color="secondary-cyan">Sec. Cyan</Badge>
                  <Badge color="success">Success</Badge>
                  <Badge color="info">Info</Badge>
                  <Badge color="warning">Warning</Badge>
                  <Badge color="danger">Danger</Badge>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Contextual Badges with icons</div>
                <div className="mt-2 mb-3 body-3 muted">Add any icon to make the badge more enjoyable and informative. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge color="primary"><StarIcon/>Primary</Badge>
                  <Badge><StarIcon/>Default</Badge>
                  <Badge color="secondary-red"><StarIcon/>Sec. Red</Badge>
                  <Badge color="secondary-yellow"><StarIcon/>Sec. Yellow</Badge>
                  <Badge color="secondary-cyan"><StarIcon/>Sec. Cyan</Badge>
                  <Badge color="success"><StarIcon/>Success</Badge>
                  <Badge color="info"><StarIcon/>Info</Badge>
                  <Badge color="warning"><StarIcon/>Warning</Badge>
                  <Badge color="danger"><StarIcon/>Danger</Badge>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Inverted Badges</div>
                <div className="mt-2 mb-3 body-3 muted">Add <code>badge-inverse-"*"</code> class to change the style of a badge. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge className="badge-inverse-primary">Primary</Badge>
                  <Badge className="badge-inverse-default">Default</Badge>
                  <Badge className="badge-inverse-secondary-red">Sec. Red</Badge>
                  <Badge className="badge-inverse-secondary-yellow">Sec. Yellow</Badge>
                  <Badge className="badge-inverse-secondary-cyan">Sec. Cyan</Badge>
                  <Badge className="badge-inverse-success">Success</Badge>
                  <Badge className="badge-inverse-info">Info</Badge>
                  <Badge className="badge-inverse-warning">Warning</Badge>
                  <Badge className="badge-inverse-danger">Danger</Badge>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Inverted Badges with icons</div>
                <div className="mt-2 mb-3 body-3 muted">Add <code>badge-inverse-"*"</code> class to change the style of a badge. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable.</div>
                <div className={s.badgesBlock}>
                  <Badge className="badge-inverse-primary" pill color="primary"><StarIcon/>Primary</Badge>
                  <Badge className="badge-inverse-default" pill><StarIcon/>Default</Badge>
                  <Badge className="badge-inverse-secondary-red" pill><StarIcon/>Sec. Red</Badge>
                  <Badge className="badge-inverse-secondary-yellow" pill><StarIcon/>Sec. Yellow</Badge>
                  <Badge className="badge-inverse-secondary-cyan" pill><StarIcon/>Sec. Cyan</Badge>
                  <Badge className="badge-inverse-success" pill><StarIcon/>Success</Badge>
                  <Badge className="badge-inverse-info" pill><StarIcon/>Info</Badge>
                  <Badge className="badge-inverse-warning" pill><StarIcon/>Warning</Badge>
                  <Badge className="badge-inverse-danger" pill><StarIcon/>Danger</Badge>
                </div>
              </Widget>            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Rounded Contextual Badges</div>
                <div className="mt-2 mb-3 body-3 muted">Add modifier <code>color="*"</code> property to change the appearance of a badge. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable. If no color is specified <code>default</code> will be used.</div>
                <div className={s.badgesBlock}>
                  <Badge href="#" pill color="primary">Primary</Badge>
                  <Badge href="#" pill>Default</Badge>
                  <Badge href="#" pill color="secondary-red">Sec. Red</Badge>
                  <Badge href="#" pill color="secondary-yellow">Sec. Yellow</Badge>
                  <Badge href="#" pill color="secondary-cyan">Sec. Cyan</Badge>
                  <Badge href="#" pill color="success">Success</Badge>
                  <Badge href="#" pill color="info">Info</Badge>
                  <Badge href="#" pill color="warning">Warning</Badge>
                  <Badge href="#" pill color="danger">Danger</Badge>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Rounded Contextual Badges with icons</div>
                <div className="mt-2 mb-3 body-3 muted">Add any icon to make the badge more enjoyable and informative. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable.</div>
                <div className={s.badgesBlock}>
                  <Badge href="#" pill color="primary"><StarIcon/>Primary</Badge>
                  <Badge href="#" pill><StarIcon/>Default</Badge>
                  <Badge href="#" pill color="secondary-red"><StarIcon/>Sec. Red</Badge>
                  <Badge href="#" pill color="secondary-yellow"><StarIcon/>Sec. Yellow</Badge>
                  <Badge href="#" pill color="secondary-cyan"><StarIcon/>Sec. Cyan</Badge>
                  <Badge href="#" pill color="success"><StarIcon/>Success</Badge>
                  <Badge href="#" pill color="info"><StarIcon/>Info</Badge>
                  <Badge href="#" pill color="warning"><StarIcon/>Warning</Badge>
                  <Badge href="#" pill color="danger"><StarIcon/>Danger</Badge>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
