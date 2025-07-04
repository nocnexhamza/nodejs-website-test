import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import s from "../../../pages/uielements/buttons/Buttons.module.scss";

class Buttons extends Component {
    state = {
        defaultButtonTabId: '1',
        outlineButtonsTabId: '1',
        buttonsSizeTabId: '1'
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
                        <BreadcrumbItem active>Buttons</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Buttons</h2>
                    <p className="mb-lg mb-3 mt-3">Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Button } from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultButtonTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultButtonTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultButtonTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultButtonTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.defaultButtonTabId}>
                        <TabPane tabId="1">
                            <div className={classnames(s.buttonsBlock, "mt-2 mb-2 ml-4")}>
                                <Button className="width-100 my-3 mr-xs">Default</Button>
                                <Button color="primary" className="width-100 my-3 mr-xs">Primary</Button>
                                <Button color="info" className="width-100 my-3 mr-xs">Info</Button>
                                <Button color="success" className="width-100 my-3 mr-xs">Success</Button>
                                <Button color="warning" className="width-100 my-3 mr-xs">Warning</Button>
                                <Button color="danger" className="width-100 my-3 mr-xs">Danger</Button>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>
                                {'<Button className="width-100 my-3 mr-xs">Default</Button>\n' +
                                '<Button color="primary" className="width-100 my-3 mr-xs">Primary</Button>\n' +
                                '<Button color="info" className="width-100 my-3 mr-xs">Info</Button>\n' +
                                '<Button color="success" className="width-100 my-3 mr-xs">Success</Button>\n' +
                                '<Button color="warning" className="width-100 my-3 mr-xs">Warning</Button>\n' +
                                '<Button color="danger" className="width-100 my-3 mr-xs">Danger</Button>\n'}
                            </SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.outlineButtonsTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('outlineButtonsTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.outlineButtonsTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('outlineButtonsTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.outlineButtonsTabId}>
                        <TabPane tabId="1">
                            <div className={classnames(s.buttonsBlock, "mt-2 mb-2 ml-4")}>
                                <Button outline className="width-100 my-3 mr-xs">Default</Button>
                                <Button outline color="primary" className="width-100 my-3 mr-xs">Primary</Button>
                                <Button outline color="info" className="width-100 my-3 mr-xs">Info</Button>
                                <Button outline color="success" className="width-100 my-3 mr-xs">Success</Button>
                                <Button outline color="warning" className="width-100 my-3 mr-xs">Warning</Button>
                                <Button outline color="danger" className="width-100 my-3 mr-xs">Danger</Button>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>
                                {'<Button outline className="width-100 my-3 mr-xs">Default</Button>\n' +
                                '<Button outline color="primary" className="width-100 my-3 mr-xs">Primary</Button>\n' +
                                '<Button outline color="info" className="width-100 my-3 mr-xs">Info</Button>\n' +
                                '<Button outline color="success" className="width-100 my-3 mr-xs">Success</Button>\n' +
                                '<Button outline color="warning" className="width-100 my-3 mr-xs">Warning</Button>\n' +
                                '<Button outline color="danger" className="width-100 my-3 mr-xs">Danger</Button>\n'}
                            </SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.buttonsSizeTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('buttonsSizeTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.buttonsSizeTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('buttonsSizeTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.buttonsSizeTabId}>
                        <TabPane tabId="1">
                            <p className="fs-mini text-muted my-2 ml-3 pt-4">
                                Fancy larger or smaller buttons?
                                Four separate sizes available for all use cases:
                                from tiny 10px button to large one.
                            </p>
                            <p className="ml-3 p-3">
                                <Button size="lg" className="mr-2">Large button</Button>
                                <Button color="primary" className="mr-2">Default button</Button>
                                <Button color="info" size="sm" className="mr-2">Small button</Button>
                                <Button color="success" size="xs" className="mr-2">Tiny button</Button>
                            </p>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>
                                {'<Button color="default" size="lg" className="my-2 mr-3">Large button</Button>\n' +
                                '<Button color="primary" className="my-2 mr-3">Default button</Button>\n' +
                                '<Button color="info" size="sm" className="my-2 mr-3">Small button</Button>\n' +
                                '<Button color="success" size="xs" className="my-2 mr-3">Tiny button</Button>'}
                            </SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/buttons/" target="_blank" rel="noopener noreferrer">Reactstrap Buttons</a></p>
                </Col>
            </Row>
        );
    }
}

export default Buttons;
