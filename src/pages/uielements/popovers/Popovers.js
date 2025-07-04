import React from "react";
import {
  Row,
  Col,
} from 'reactstrap';
import Widget from "../../../components/Widget/Widget";
import CustomPopover from "../../../components/CustomPopover/CustomPopover";
import CustomTooltip from "../../../components/CustomTooltip/CustomTooltip";

export default function Popovers() {

  let mock = [
    {
      placement: "top",
      text: "Top",
      color: "primary"
    },
    {
      placement: "bottom",
      text: "Bottom",
      color: "success"
    },
    {
      placement: "left",
      text: "Left",
      color: "warning"
    },
    {
      placement: "right",
      text: "Right",
      color: "danger"
    }
  ]

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Popover Example</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Popovers rely on the 3rd party library <a color="primary" href="https://popper.js.org/">Popper.js</a> for positioning.
                  Popovers are opt-in for performance reasons, so you must initialize them yourself.
                </div>
                <div className="d-flex flex-wrap">
                  <CustomPopover
                    className="mr-3 mb-3"
                    id={'Popover'}
                    color="primary"
                    placement="top"
                    btnLabel="Launch Popover"
                  />
                  <CustomPopover
                    disabled
                    id={'Popover'}
                    color="primary"
                    btnLabel="Disabled Popover"
                  />
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Tooltip Example</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Tooltips rely on the 3rd party library <a color="primary" href="https://popper.js.org/">Popper.js</a> for positioning.
                  Tooltips are opt-in for performance reasons, so you must initialize them yourself.
                </div>
                <div className="d-flex flex-wrap">
                  <CustomTooltip
                    className="mr-3 mb-3"
                    id={"Tooltip"}
                    target={"Tooltip"}
                    color="primary"
                    placement="top"
                    text="Top"
                  />
                  <CustomTooltip
                    disabled
                    id={"Tooltip"}
                    target={"Tooltip"}
                    color="primary"
                    placement="top"
                    text="Top"
                  />
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Popover Directions</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Four options are available: top, right, bottom, and left aligned.
                  Trigger each popover to see where it positioning
                </div>
                <div className="d-flex flex-wrap">
                  {mock.map((item, id) =>
                    <CustomPopover
                      key={id}
                      className="mr-3 mb-3"
                      id={`Popover-${id}`}
                      color={item.color}
                      placement={item.placement}
                      btnLabel={item.text}
                    />
                  )}
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Tooltip Directions</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Four options are available: top, right, bottom, and left aligned.
                  Trigger each popover to see where it positioning
                </div>
                <div className="d-flex flex-wrap">
                  {mock.map((item, id) =>
                    <CustomTooltip
                      key={id}
                      className="mr-3 mb-3"
                      target={`Tooltip-${id}`}
                      id={`Tooltip-${id}`}
                      color={item.color}
                      placement={item.placement}
                      text={item.text}
                    />
                  )}
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
