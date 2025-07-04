import React from "react";
import {
  Row,
  Col,
  Progress,
} from 'reactstrap';
import Widget from "../../../components/Widget/Widget";

export default function ProgressPage() {

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Progress Example</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Badges scale to match the size of the immediate parent element by
                  using relative font sizing and em units.
                </div>
                <Progress className="mb-3" value="25" />
                <Progress className="mb-3" value="50" />
                <Progress className="mb-3" value="75" />
                <Progress value="100" />
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Colorful Progress Bars</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Use background utility classes to change the appearance of
                  individual progress bars.
                  Make your progress bars informative and adapted to your tasks.
                </div>
                <Progress color="info" className="mb-3" value="25"/>
                <Progress color="success" className="mb-3" value="50"/>
                <Progress color="warning" className="mb-3" value="75"/>
                <Progress color="danger" value="100"/>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Labeled Progress Bars</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Add labels to your progress bars by placing text within the <code>&lt;Progress&gt;</code>.
                  Make your progress bars informative and adapted to your tasks.
                </div>
                <Progress className="mb-3" value="33">33%</Progress>
                <Progress color="info" className="mb-3" value="66">66% completed!</Progress>
                <Progress color="warning" className="mb-3" value="100">Something was wrong!</Progress>
                <Progress color="success" value="100">Completed!</Progress>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Progress Bars of Different Heights</div>
                <div className="mt-2 mb-3 body-3 muted">
                  We set a height value by <code>.progress-*</code> classes, so you can change between
                  <code>xs</code>, <code>lg</code>, <code>xl</code> sizes.
                  <code>.progress-md</code> is used by default.
                </div>
                <Progress className="progress-xs mb-3" value="25"/>
                <Progress className="mb-3" value="50"/>
                <Progress className="progress-lg mb-3" value="75"/>
                <Progress className="progress-xl" value="100"/>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Striped Progress Bars</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Add <code>striped</code> property to any <code>&lt;Progress&gt;</code> to
                  apply a stripe via CSS gradient over the progress bar’s background color.
                </div>
                <Progress color="primary" striped className="mb-3" value="25"/>
                <Progress color="success" striped className="mb-3" value="50"/>
                <Progress color="warning" striped className="mb-3" value="75"/>
                <Progress color="danger" striped className="mb-3" value="100"/>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Animated Striped Progress Bars</div>
                <div className="mt-2 mb-3 body-3 muted">
                  The striped gradient can also be animated. Add <code>animated</code> property
                  to <code>&lt;Progress&gt;</code> to animate the stripes right to left via CSS3 animations.
                </div>
                <Progress color="primary" striped animated className="mb-3" value="25"/>
                <Progress color="success" striped animated className="mb-3" value="50"/>
                <Progress color="warning" striped animated className="mb-3" value="75"/>
                <Progress color="danger" striped animated className="mb-3" value="100"/>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
