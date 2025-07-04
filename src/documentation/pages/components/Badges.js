import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Badge, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import s from "../../../pages/uielements/badges/Badges.module.scss"
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Badges extends Component {
    state = {
        defaultBadgesTabId: '1',
        pillsBadgesTabId: '1',
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
                        <BreadcrumbItem active>Badge</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col md={10} className="my-2">
                    <h2>Badge</h2>
                    <p className="mb-lg my-2">Documentation and examples for badges, our small count and labeling component.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Badge } from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultBadgesTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultBadgesTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultBadgesTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultBadgesTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg" activeTab={this.state.defaultBadgesTabId}>
                        <TabPane tabId="1" className="my-2 ml-3 p-2">
                                <div className="my-2 p-2">
                                    <h1>Example heading <Badge color="primary">Primary</Badge></h1>
                                    <h2>Example heading <Badge color="info">Info</Badge></h2>
                                    <h3>Example heading <Badge color="warning">Warning</Badge></h3>
                                    <h4>Example heading <Badge color="success">Success</Badge></h4>
                                    <h5>Example heading <Badge color="danger">Danger</Badge></h5>
                                    <h6>Example heading <Badge color="secondary">Default</Badge></h6>
                                </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<h1>Example heading <Badge color="primary">Primary</Badge></h1>\n' +
                            '<h2>Example heading <Badge color="info">Info</Badge></h2>\n' +
                            '<h3>Example heading <Badge color="warning">Warning</Badge></h3>\n' +
                            '<h4>Example heading <Badge color="success">Success</Badge></h4>\n' +
                            '<h5>Example heading <Badge color="danger">Danger</Badge></h5>\n' +
                            '<h6>Example heading <Badge color="secondary">Secondary</Badge></h6>\n'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.pillsBadgesTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('pillsBadgesTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.pillsBadgesTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('pillsBadgesTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg" activeTab={this.state.pillsBadgesTabId}>
                        <TabPane tabId="1" className="p-2 my-2">
                            <h2 className="my-2 ml-3 p-2">Pill badges</h2>
                            <div className={classnames(s.badgesBlock, "ml-3 p-2")}>
                                <Badge className="mr-xs" color="primary" pill>Primary</Badge>
                                <Badge className="mr-xs" color="info" pill>Info</Badge>
                                <Badge className="mr-xs" color="warning" pill>Warning</Badge>
                                <Badge className="mr-xs" color="success" pill>Success</Badge>
                                <Badge className="mr-xs" color="danger" pill>Danger</Badge>
                                <Badge className="mr-xs" color="secondary" pill>Default</Badge>
                                <Badge color="secondary-red" pill>Sec. Red</Badge>
                                <Badge color="secondary-yellow" pill>Sec. Yellow</Badge>
                                <Badge color="secondary-cyan" pill>Sec. Cyan</Badge>
                            </div>
                            <h2 className="my-2 ml-3 p-2">Badges with link</h2>
                            <div className={classnames(s.badgesBlock, "ml-3 p-2")}>
                                <Badge className="mr-xs mr-md-3" href="#" color="primary">Primary</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="info">Info</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="warning">Warning</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="success">Success</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="danger">Danger</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="secondary">Default</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="secondary-red">Sec. Red</Badge>
                                <Badge className="mr-xs mr-md-3" href="#" color="secondary-yellow">Sec. Yellow</Badge>
                                <Badge className="mr-xs" href="#" color="secondary-cyan">Sec. Cyan</Badge>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>
                                {'<Badge className="mr-xs" color="primary" pill>Primary</Badge> \n' +
                                '<Badge className="mr-xs" color="info" pill>Primary</Badge> \n' +
                                '<Badge className="mr-xs" color="danger" pill>Primary</Badge> \n' +
                                '<Badge className="mr-xs" color="warning" pill>Primary</Badge> \n' +
                                '<Badge className="mr-xs" color="secondary" pill>Primary</Badge> \n' +
                                '<Badge className="mr-xs" color="secondary-red" pill>Primary</Badge> \n' +
                                '<Badge className="mr-xs" href="#" color="primary">Primary</Badge>'}
                            </SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/badge/Badges.js" target="_blank" rel="noopener noreferrer">Reactstrap Badge</a></p>
                </Col>
            </Row>
        );
    }
}

export default Badges;
