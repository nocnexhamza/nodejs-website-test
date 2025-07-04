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
    NavLink
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import s from "../../../pages/uielements/navs/Navs.module.scss";

class NavPage extends Component {
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
                        <BreadcrumbItem active>Nav</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Nav</h2>
                    <p className="mb-lg my-2">Change the style of Nav component with modifiers and utilities. Mix and match as needed, or build your own.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Nav, NavItem, NavLink } from 'reactstrap';"}
                    </SyntaxHighlighter>
                        <div className="headline-2 my-2">Basic Nav</div>
                        <Nav tabs className="bg-transparent my-2">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.verticalNavTabId === '1' })}
                                    onClick={() => {
                                        this.changeTab('verticalNavTabId', '1');
                                    }}
                                >
                                    Example
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.verticalNavTabId === '2' })}
                                    onClick={() => {
                                        this.changeTab('verticalNavTabId', '2');
                                    }}
                                >
                                    Code
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className="mb-xlg my-2" activeTab={this.state.verticalNavTabId}>
                            <TabPane tabId="1">
                                <Nav className="p-2">
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
                            </TabPane>
                            <TabPane tabId="2">
                                <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Nav>\n' +
                                '  <NavItem>\n' +
                                '    <NavLink href="#" active>Link</NavLink>\n' +
                                '  </NavItem>\n' +
                                '  <NavItem>\n' +
                                '    <NavLink href="#">Link</NavLink>\n' +
                                '  </NavItem>\n' +
                                '  <NavItem>\n' +
                                '    <NavLink href="#">Another Link</NavLink>\n' +
                                '  </NavItem>\n' +
                                '  <NavItem>\n' +
                                '    <NavLink disabled href="#">Disabled Link</NavLink>\n' +
                                '  </NavItem>\n' +
                                '</Nav>'}</SyntaxHighlighter>
                            </TabPane>
                        </TabContent>

                    <div className="headline-2 my-2">Nav Vertical Pills</div>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.pillsNavTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('pillsNavTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.pillsNavTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('pillsNavTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.pillsNavTabId}>
                        <TabPane tabId="1">
                            <Nav className="p-2" vertical pills>
                                <NavItem>
                                    <NavLink href="#" active>Link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Another Link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">Disabled Link</NavLink>
                                </NavItem>
                            </Nav>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Nav>\n' +
                            '  <NavItem vertical pills>\n' +
                            '    <NavLink href="#">Link</NavLink>\n' +
                            '  </NavItem>\n' +
                            '  <NavItem>\n' +
                            '    <NavLink href="#" active>Link</NavLink>\n' +
                            '  </NavItem>\n' +
                            '  <NavItem>\n' +
                            '    <NavLink href="#">Another Link</NavLink>\n' +
                            '  </NavItem>\n' +
                            '  <NavItem>\n' +
                            '    <NavLink disabled href="#">Disabled Link</NavLink>\n' +
                            '  </NavItem>\n' +
                            '</Nav>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>

                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/navs/" target="_blank" rel="noopener noreferrer">Reactstrap Navs</a></p>
                </Col>
            </Row>
        );
    }
}

export default NavPage;
