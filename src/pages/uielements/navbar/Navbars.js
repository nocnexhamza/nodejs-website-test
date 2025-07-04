import React, { useState } from 'react';
import {
  Row,
  Col,
  Collapse,
  Form,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import Widget from "../../../components/Widget/Widget";
import MenuIcon from "../../../components/Icons/HeaderIcons/MenuIcon";
import BellIcon from "../../../components/Icons/HeaderIcons/BellIcon.js";
import SearchBarIcon from "../../../components/Icons/HeaderIcons/SearchBarIcon.js";
import userImg from "../../../assets/user.svg";

import s from "./Navbars.module.scss";

export default function Navbars() {

  const [isFirstBurgerOpen, setFirstBurgerOpen] = useState(false);
  const toggleFirstBurger = () => {
    setFirstBurgerOpen(!isFirstBurgerOpen);
  }

  const [isSecondBurgerOpen, setSecondBurgerOpen] = useState(false);
  const toggleSecondBurger = () => {
    setSecondBurgerOpen(!isSecondBurgerOpen);
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4 ">
            <Col>
              <Widget className="widget-p-md">
                <div className="headline-2">Simple Example</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Navbar displays yours app links by importing and inserting Navbar component. To swap links style add attribute within Button component.
                </div>
                <div className={s.navbarPanel}>
                  <div className="p-3 d-flex flex-row" color="light" light>
                    <NavbarToggler onClick={toggleFirstBurger} className="mr-2">
                      <MenuIcon/>
                    </NavbarToggler>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                      <div>
                        <span className="headline-2 font-weight-bold">SOFIA</span>
                      </div>
                      <div className="d-none d-xl-block">
                        <Nav>
                          <NavItem>
                            <NavLink className={`headline-3 ${s.navItem}`}>Menu 1</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className={`headline-3 ${s.navItem}`}>Menu 2</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="headline-3">Active</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="headline-3" disabled>Disabled</NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                      <Nav className="align-items-center">
                        <div className="position-relative">
                          <BellIcon className="position-relative"/>
                          <div className={s.count}/>
                        </div>
                        <UncontrolledDropdown className="ml-3">
                          <DropdownToggle nav caret className="navbar-dropdown-toggle">
                            <div className={`${s.avatar} rounded-circle float-left mr-2`}>
                              <img src={userImg} alt="User"/>
                            </div>
                            <span className="small d-none d-sm-block ml-1 mr-2 body-1">Christina Carey</span>
                          </DropdownToggle>
                          <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "194px" }}>
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </div>
                  </div>
                  <Collapse isOpen={isFirstBurgerOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink>Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>Features</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>Components</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4 mb-md-0">
            <Col>
              <Widget className="widget-p-md">
                <div className="headline-2">Search Navbar</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Search icon makes UX more flexible. To start using search icon, make sure you got all relative functions.
                </div>
                <div className={s.navbarPanel}>
                  <div className="p-3 d-flex flex-row" color="light" light>
                    <NavbarToggler className="mr-2" onClick={toggleSecondBurger}>
                      <MenuIcon/>
                    </NavbarToggler>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                      <Form className="d-none d-sm-block" inline>
                        <FormGroup>
                          <InputGroup>
                            <Input id="search-input" placeholder="Search Dashboard" className="focus no-border"/>
                            <InputGroupAddon addonType="prepend">
                              <a className="d-flex align-self-center px-3" >
                                <SearchBarIcon/>
                              </a>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Form>
                      <Nav className="align-items-center">
                        <div className="position-relative">
                          <BellIcon className="position-relative"/>
                          <div className={s.count}/>
                        </div>
                        <UncontrolledDropdown className="ml-3">
                          <DropdownToggle nav caret className="navbar-dropdown-toggle">
                            <div className={`${s.avatar} rounded-circle float-left mr-2`}>
                              <img src={userImg} alt="User"/>
                            </div>
                            <span className="small d-none d-sm-block ml-1 mr-2 body-1">Christina Carey</span>
                          </DropdownToggle>
                          <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "194px" }}>
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </div>
                  </div>
                  <Collapse isOpen={isSecondBurgerOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink>Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>Features</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>Components</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

