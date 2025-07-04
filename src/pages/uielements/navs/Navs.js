import React, { useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import s from "./Navs.module.scss";

export default function Navs() {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("1")
  const [activePill, setActivePill] = useState("2")
  const toggle = () => setDropdownOpen(!dropdownOpen)
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  const togglePill = (pill) => {
    if (activePill !== pill) {
      setActivePill(pill)
    }
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Basic Nav</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states.
                  Swap modifier classes to switch between each style.
                </div>
                <div className={s.navBlock}>
                  <Nav>
                    <NavItem>
                      <NavLink href="#">First Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Second Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Third Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Nav With Dropdown</div>
                <div className="mt-2 mb-3 body-3 muted">
                  The base <code>.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components.
                  It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.
                </div>
                <div className={s.navBlock}>
                  <Nav>
                    <NavItem>
                      <NavLink href="#" active>First Link</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle nav caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                      <NavLink href="#">Third Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Nav Pills</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Takes the basic nav and adds the <code>pills</code> property to generate a pills nav interface.
                </div>
                <div className={s.navBlock}>
                  <Nav pills>
                    <NavItem>
                      <NavLink
                        href="#"
                        active={activePill === '1'}
                        onClick={() => togglePill('1')}
                      >
                        First Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#"
                        active={activePill === '2'}
                        onClick={() => togglePill('2')}
                      >
                        Second Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#"
                        active={activePill === '3'}
                        onClick={() => togglePill('3')}
                      >
                        Third Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Nav Tabs</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Takes the basic nav and adds the <code>tabs</code> property to generate a tabbed interface.
                </div>
                <div className={s.navBlock}>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        href="#"
                        active={activeTab === '1'}
                        onClick={() => toggleTab('1')}
                      >
                        First Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#"
                        active={activeTab === '2'}
                        onClick={() => toggleTab('2')}
                      >
                        Second Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#"
                        active={activeTab === '3'}
                        onClick={() => toggleTab('3')}
                      >
                        Third Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Vertical Nav Pills</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Stack your navigation by adding <code>vertical</code> property.
                </div>
                <div className={s.navBlock}>
                  <Nav vertical pills>
                    <NavItem>
                      <NavLink href="#" active>First Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Second Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Third Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Vertical Nav Tabs</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Stack your navigation by adding <code>vertical</code> property.
                </div>
                <div className={s.navBlock}>
                  <Nav vertical>
                    <NavItem>
                      <NavLink href="#" active>First Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Second Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Third Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
