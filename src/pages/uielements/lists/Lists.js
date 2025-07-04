import React from "react";
import {
  Badge,
  Col,
  Row
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import s from "./Lists.module.scss";

export default function Lists() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Simple List Group</div>
                <div className="mt-2 mb-3 body-3 muted">
                  The most basic list group is an unordered list with list items and the proper classes.
                  Build upon it with the options that follow, or with your own CSS as needed.
                </div>
                <ul className="list-group">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Disabled List Items</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Add <code>.disabled</code> to a <code>.list-group-item</code> to make it appear disabled.
                  With <code>&lt;button&gt;</code>, you can also make use of the disabled attribute instead of the <code>.disabled</code> class.
                </div>
                <ul className="list-group">
                  <li className="list-group-item disabled">A disabled item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">List Items With Icons</div>
                <div className="mt-2 mb-3 body-3 muted">You can place Font Awesome icons just about anywhere with the <code>&lt;a&gt;</code> tag!
                </div>
                <ul className="list-group">
                  <li className="list-group-item disabled">
                    <div className="d-flex align-content-center">
                      <i className="fa fa-star mr-2" />A disabled item
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex align-content-center">
                      <i className="fa fa-star mr-2 text-secondary-red" />A second item
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex align-content-center">
                      <i className="fa fa-star mr-2 text-primary" />A third item
                    </div>
                  </li>
                </ul>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">List Items With Badges</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Add badges to any list group item to show unread counts, activity, and more.
                </div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className={s.listBadge}>
                      A first item
                      <Badge color="secondary-red">3 new notifications!</Badge>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className={s.listBadge}>
                      A second item
                      <Badge pill color="success">2</Badge>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className={s.listBadge}>
                      A third item
                      <Badge color="primary">14</Badge>
                    </div>
                  </li>
                </ul>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Links List</div>
                <div className="mt-2 mb-3 body-3 muted">Use <code>&lt;a&gt;</code> to create actionable list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>.</div>
                <div className="list-group">
                  <a href="/" className="list-group-item list-group-item-action active" aria-current="true">The current link item</a>
                  <a href="/" className="list-group-item list-group-item-action">A second link item</a>
                  <a href="/" className="list-group-item list-group-item-action disabled" tabIndex="-1">A disabled link item</a>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Buttons List</div>
                <div className="mt-2 mb-3 body-3 muted">Use <code>&lt;button&gt;</code> to create actionable list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>.</div>
                <div className="list-group">
                  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">The current button</button>
                  <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
