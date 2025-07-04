import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Badge,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Dropdown,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import TasksStepper from "./stepper/TasksStepper";
import AvatarGroup from "../../components/AvatarGroup/AvatarGroup";
import ApexCharts from "react-apexcharts";
import s from "./Profile.module.scss";

import moreIcon from "../../assets/tables/moreIcon.svg";
import profileImg from "../../assets/profile/profile.png";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";

import mock from "./mock";
import Avatar from "../../components/Avatar/Avatar";
const { newsGroupData, avatarGroupData, apexLineChart } = mock;

export default function Profile() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [wizardDropdownOpen, setWizardDropdownOpen] = useState(false);

  const profileMenuOpen = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  }

  const wizardMenuOpen = () => {
    setWizardDropdownOpen(!wizardDropdownOpen);
  }

  return(
    <div>
      <Row className="mb-4">
        <Col lg='6' sm='12' className="mb-4 mb-lg-0">
          <Widget className={`widget-p-md ${s.profile}`}>
            <div className="d-flex justify-content-end">
              <Dropdown
                nav
                isOpen={profileDropdownOpen}
                toggle={() => profileMenuOpen()}
              >
                <DropdownToggle nav className="p-0">
                  <img src={moreIcon} alt="More..."/>
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className={s.profileTitle}>
              <img className="mx-0 mx-md-2" src={profileImg} alt="..."/>
              <div className="d-flex flex-column mb-2 ml-3">
                <p className="headline-1">Mary Sanders</p>
                <p className="body-1 mt-1 mb-3">UI/UX Designer</p>
                <hr />
                <div className="d-flex flex-row justify-content-between">
                  <a href="https://www.facebook.com/flatlogic" target = "_blank" rel = "noopener noreferrer">
                    <i className="eva eva-facebook"/>
                  </a>
                  <a href="https://twitter.com/flatlogic/" target = "_blank" rel = "noopener noreferrer">
                    <i className="eva eva-twitter"/>
                  </a>
                  <a href="https://github.com/flatlogic/" target = "_blank" rel = "noopener noreferrer">
                    <i className="eva eva-github"/>
                  </a>
                  <a href="https://www.linkedin.com/company/flatlogic/" target = "_blank" rel = "noopener noreferrer">
                    <i className="eva eva-linkedin"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="body-1 mb-4 base-light-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's typesetting industry.
              Lorem Ipsum has been the industry's
            </div>
            <div className={s.badges}>
              <Badge className="badge-inverse-primary">Figma</Badge>
              <Badge className="badge-inverse-secondary-red">Marketing</Badge>
              <Badge className="badge-inverse-secondary-yellow">Digital Marketing</Badge>
              <Badge className="badge-inverse-secondary-cyan">Graphic Design</Badge>
              <Badge className="badge-inverse-success">Social Media</Badge>
            </div>
          </Widget>
        </Col>


        <Col lg='6' sm='12'>
          <Widget className="widget-p-md">
            <div className="headline-3 mb-1">Earning</div>
            <div className="mb-4">
              <span className="fake-link">BBC News, </span>
              <span className="fake-link">Euronews, </span>
              <span className="fake-link">CNN, </span>
              <span className="fake-link">GB News</span>
            </div>
            <div className={s.news}>
              {newsGroupData.map((item, index) => (
                <div key={index} className="d-flex flex-row mb-4">
                  <Avatar
                    className="zoom-in"
                    imgClassName="avatar"
                    size="md"
                    id={index}
                    img={item.img}
                  />
                  <div className="d-flex flex-column ml-4">
                    <div className="d-flex flex-row">
                      <p className="headline-3 mr-3">{item.title}</p>
                      <p className="body-4 muted">{item.time}</p>
                    </div>
                    <div className="body-3 base-dark-gray">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry. Lorem Ipsum has...
                      <span className="fake-link"> view all</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col lg={6} sm={12}>
          <Row className={s.widgetRow}>
            <Col lg={8} sm={12} className={`mb-4 mb-lg-0 ${s.widgetOverflow}`}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between mb-3">
                  <div className="headline-3 d-flex align-items-center">Overview</div>
                  <ButtonDropdown
                    isOpen={wizardDropdownOpen}
                    toggle={() => wizardMenuOpen()}
                  >
                    <DropdownToggle caret>
                      &nbsp; Week 1 &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Week 2</DropdownItem>
                      <DropdownItem>Week 3</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <div className={s.chronoWidget}>
                  <TasksStepper/>
                </div>
              </Widget>
            </Col>
            <Col lg={4} sm={12} className="mb-4 mb-lg-0">
              <Row className={s.cardsWidgetRow}>
                <Col sm={4} lg={12} className="mb-4 mb-sm-0 mb-lg-4">
                  <Widget className="widget-p-sm">
                    <div className="d-flex flex-column align-items-center">
                      <img className="img-fluid mb-1" src={heartRed} alt="..." />
                      <div className="my-2 headline-3">Paypal</div>
                      <div className="body-2 muted">+$2000</div>
                    </div>
                  </Widget>
                </Col>
                <Col sm={4} lg={12} className="mb-4 mb-sm-0 mb-lg-4">
                  <Widget className="widget-p-sm">
                    <div className="d-flex flex-column align-items-center">
                      <img className="img-fluid mb-1" src={heartTeal} alt="..." />
                      <div className="my-2 headline-3">Paypal</div>
                      <div className="body-2 muted">+$2000</div>
                    </div>
                  </Widget>
                </Col>
                <Col sm={4} lg={12} className={s.widgetOverflow}>
                  <Widget className="widget-p-sm">
                    <div className="d-flex flex-column align-items-center">
                      <div className={`headline-1 ${s.earning}`}>+$467,80</div>
                      <div className="body-4 muted">Your total earning</div>
                      <Button color="primary" className="btn-rounded mt-3">Get Money</Button>
                    </div>
                  </Widget>
                </Col>
              </Row>
            </Col>
          </Row>

        </Col>
        <Col lg={6} sm={12}>
          <Row className={s.widgetRow}>
            <Col xs={12} className="mb-4">
              <Widget className="widget-p-md">
                <div className="headline-3">Earning</div>
                <div className="text-center">
                  <ApexCharts
                    series={apexLineChart.series}
                    options={apexLineChart.options}
                    height={250}
                  />
                  <Button color="secondary-red" className="btn-rounded mt-3">View Analytics</Button>
                </div>
              </Widget>
            </Col>
            <Col xs={12} className={s.widgetOverflow}>
              <Widget className="widget-p-md">
                <p className="headline-2">My Friends</p>
                <div className="d-flex justify-content-between">
                  <div>
                    <AvatarGroup
                      data={avatarGroupData}
                      size="lg"
                      placement="top"
                      className="pt-4"
                    />
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <p className="body-1 muted mb-3">283 Friends</p>
                    <Button color="secondary" className="btn-rounded body-3" outline>+ Add new friend</Button>
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
