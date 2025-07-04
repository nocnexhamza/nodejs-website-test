import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText,
  CardImg,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import s from "./Cards.module.scss";

import lifestyleImg from "../../../assets/cards/lifestyleImg.png";
import leavesImg from "../../../assets/cards/leavesImg.png";
import coupleImg from "../../../assets/cards/coupleImg.png";
import orangeEyesImg from "../../../assets/cards/orangesEyesImg.png";
import girlImg from "../../../assets/cards/girlImg.png";
import cerealsImg from "../../../assets/cards/cerealsImg.png";
import mariaImage from "../../../assets/navbarMenus/mariaImage.jpg";


export default function Cards() {

  const [activeTab, setActiveTab] = useState(1);

  function toggleTab(tabId) {
    setActiveTab(tabId);
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col>
              <Card className="background-cover border-0" style={{backgroundImage: `url(${lifestyleImg})`}}>
                <CardBody className={s.titleCardBody} >
                  <div className="headline-1 text-default mb-3">Lifestyle Brand</div>
                  <div className={`body-3 text-dark-gray ${s.titleCardDescription}`}>
                    A lifestyle brand is a company that markets its products or services to embody the interests, attitudes, and opinions of a group or a culture.
                  </div>
                  <Button className="mt-3 btn-rounded" color="primary">Learn More</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6} xl={4}>
              <Card className="border-0">
                <CardImg top width="100%" src={leavesImg} alt="Green leaves" />
                <CardBody>
                  <CardText className="body-3 text-dark-gray">Some quick example text to make up the bulk of the card's content.</CardText>
                  <div className={s.buttonsGroup}>
                    <Button className="btn-rounded mr-3" color="primary">Share</Button>
                    <Button outline className="btn-rounded" color="primary">Learn More</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} xl={4} className="mt-4 mt-md-0">
              <Card className="border-0">
                <CardImg top width="100%" src={coupleImg} alt="Heterosexual couple" />
                <CardBody>
                  <CardText className="body-3 text-dark-gray">Some quick example text to make up the bulk of the card's content.</CardText>
                  <div className="w-100 text-center">
                    <Button className="btn-rounded mt-3" color="warning">Get More Information</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} xl={4} className="mt-4 mt-xl-0">
              <Card className="border-0">
                <CardImg top width="100%" src={orangeEyesImg} alt="Orange eyes girl" />
                <CardBody>
                  <CardText className="body-3 text-dark-gray">Some quick example text to make up the bulk of the card's content.</CardText>
                  <Button className="btn-rounded mt-3 float-right" color="secondary-red">Buy</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6} xl={4}>
              <Card className="border-0">
                <div className={s.cardProfileInfo}>
                  <img src={mariaImage} alt="Maria profile"/>
                  <div>
                    <p className="body-3">Maria</p>
                    <p className="label muted">15 min ago</p>
                  </div>
                </div>
                <img width="100%" src={cerealsImg} alt="Cereals breakfast"/>
                <CardBody>
                  <Button className="btn-rounded float-right" color="secondary-cyan">More Info</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} xl={4} className="mt-4 mt-md-0">
              <Card className="border-0">
                <CardBody>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({active: activeTab === 1})}
                        onClick={() => {toggleTab(1)}}
                      >
                        <div className="headline-3">Average Rating</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({active: activeTab === 2})}
                        onClick={() => {toggleTab(2)}}
                      >
                        <div className="headline-3">All Time</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                <div className={s.ratingBlock}>
                  <div className="text-warning">
                    <i className="fa fa-star mr-1" />
                    <i className="fa fa-star mr-1" />
                    <i className="fa fa-star mr-1" />
                    <i className="fa fa-star mr-1" />
                    <i className="fa fa-star" />
                  </div>
                  <span className="text-secondary-red">342 REVIEWS</span>
                </div>
                <div className="my-3">
                  69% of customers recommend this product. Lorem ipsum is simply text for filling blocks without important information.
                </div>
                  <Button className="btn-rounded" color="info">Write a review</Button>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={6} xl={4} className="mt-4 mt-xl-0">
              <Card className="border-0">
                <CardImg top width="100%" src={girlImg} alt="Girl with apple" />
                <CardBody>
                  <CardText className="body-3 text-dark-gray">Some quick example text to make up the bulk of the card's content.</CardText>
                  <Button className="btn-rounded mt-3 float-right" color="success">Accept</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
