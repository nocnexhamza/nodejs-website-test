import React, { Component } from 'react';
import {Row, Col, Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink, Badge} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from "../../../pages/uielements/lists/Lists.module.scss";

class Buttons extends Component {
    state = {
        defaultProgressTabId: '1',
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
                        <BreadcrumbItem active>Progress</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Lists</h2>
                    <p className="mb-lg">Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultProgressTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultProgressTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultProgressTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultProgressTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-3" activeTab={this.state.defaultProgressTabId}>
                        <TabPane tabId="1">
                            <div className="headline-2">
                                <h2 className="p-3">List Example</h2>
                            </div>
                            <ul className="list-group p-3">
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
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<div className="headline-2 my-3 p-2">List Example</div>\n' +
                            '<ul className="list-group">\n' +
                            '<li className="list-group-item">\n' +
                            '<div className={s.listBadge}></div>\n' +
                            '</li>\n' +
                            '<li className="list-group-item">\n' +
                            '<div className={s.listBadge}></div>\n' +
                            '</li>\n' +
                            '<li className="list-group-item">\n' +
                            '<div className={s.listBadge}></div>\n' +
                            '</li>' +
                            '</ul>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        );
    }
}

export default Buttons;
