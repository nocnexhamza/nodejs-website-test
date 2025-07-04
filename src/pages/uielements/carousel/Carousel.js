import React from "react";
import {
  Col,
  Row,
} from "reactstrap";
import CustomCarousel from "../../../components/CustomCarousel/CustomCarousel.js";

import mock from "./mock";

export default function Carousel() {

  const { images1, images2, images3 } = mock;

  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <CustomCarousel
                data={images1}
                position="static"
                variant="progress"
              >
              </CustomCarousel>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <CustomCarousel
                data={images2}
                position="static"
                variant="text"
              >
              </CustomCarousel>
            </Col>
            <Col xs={12} lg={6}>
              <CustomCarousel
                data={images3}
                position="static"
                variant="dots"
              >
              </CustomCarousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

