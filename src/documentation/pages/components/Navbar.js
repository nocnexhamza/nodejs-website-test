import React, { Component } from 'react';
import {
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SofiaLogo from "../../../components/Icons/SofiaLogo";

class NavbarPage extends Component {
    state = {
        defaultNavTabId: '1',
        verticalNavTabId: '1',
        pillsNavTabId: '1',
    };

    changeTab(field, id) {
        this.setState({
            [field]: id,
        })
    }

    render() {
        return (
            <Row>
                <Col md={10}>
                    <Breadcrumb>
                        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                        <BreadcrumbItem>Documentation</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem active>Navbar</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Navbar</h2>
                    <p className="mb-lg">Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar.
                        Includes support for branding, navigation, and more, including support for our collapse plugin.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import {\n" +
                        "  Nav,\n" +
                        "  NavItem,\n" +
                        "  NavLink,\n" +
                        "  Navbar,\n" +
                        "  NavbarBrand,\n" +
                        "  NavbarToggler,\n" +
                        "  Collapse,\n" +
                        "  UncontrolledDropdown,\n" +
                        "  DropdownToggle,\n" +
                        "  DropdownMenu,\n" +
                        "  DropdownItem\n" +
                        "} from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultNavTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultNavTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultNavTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultNavTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.defaultNavTabId}>
                        <TabPane tabId="1">
                            <Navbar className="p-3 overflow-auto" color="light" light expand="md">
                                <NavbarBrand className="d-flex align-items-center" href="/">
                                    <SofiaLogo/>
                                    <span className="headline-2 ml-2 font-weight-bold">SOFIA</span>
                                </NavbarBrand>
                                <NavbarToggler className="ml-auto"/>
                                <Collapse navbar>
                                    <Nav className="ml-auto p-2" navbar>
                                        <NavItem>
                                            <NavLink>Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink>Features</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink>Components</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink disabled>Disabled</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Navbar color="light" light expand="md">\n' +
                            '  <NavbarBrand href="/">Sing</NavbarBrand>\n' +
                            '  <NavbarToggler />\n' +
                            '  <Collapse navbar>\n' +
                            '    <Nav className="ml-auto" navbar>\n' +
                            '      <NavItem>\n' +
                            '        <NavLink href="#">Components</NavLink>\n' +
                            '      </NavItem>\n' +
                            '      <NavItem>\n' +
                            '        <NavLink href="#">Documentation</NavLink>\n' +
                            '      </NavItem>\n' +
                            '      <UncontrolledDropdown nav inNavbar>\n' +
                            '        <DropdownToggle nav caret>\n' +
                            '          Options\n' +
                            '        </DropdownToggle>\n' +
                            '        <DropdownMenu right>\n' +
                            '          <DropdownItem>\n' +
                            '            Option 1\n' +
                            '          </DropdownItem>\n' +
                            '          <DropdownItem>\n' +
                            '            Option 2\n' +
                            '          </DropdownItem>\n' +
                            '          <DropdownItem divider />\n' +
                            '          <DropdownItem>\n' +
                            '            Reset\n' +
                            '          </DropdownItem>\n' +
                            '        </DropdownMenu>\n' +
                            '      </UncontrolledDropdown>\n' +
                            '    </Nav>\n' +
                            '  </Collapse>\n' +
                            '</Navbar>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">Reactstrap Card</a></p>
                </Col>
            </Row>
        );
    }
}

export default NavbarPage;
