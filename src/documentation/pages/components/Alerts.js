import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Alert, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import infoIcon from '../../../assets/notifications/infoIcon.svg';
import warningIcon from '../../../assets/notifications/warningIcon.svg';
import successIcon from '../../../assets/notifications/successIcon.svg';
import dangerIcon from '../../../assets/notifications/dangerIcon.svg';
import s from '../../../components/CustomAlert/CustomAlert.module.scss'

class Alerts extends Component {
    state = {
        defaultAlertsTabId: '1',
        transparentAlertsTabId: '1',
        alertsOne: [{
            id: 'al-1',
            type: 'success',
            icon: successIcon,
            msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
            visible: true,
        }, {
            id: 'al-2',
            type: 'info',
            icon: infoIcon,
            msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
            visible: true,
        }, {
            id: 'al-3',
            type: 'warning',
            icon: warningIcon,
            msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
            visible: true,
        }, {
            id: 'al-4',
            type: 'danger',
            icon: dangerIcon,
            msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again.',
            visible: true,
        }],
        alertsTwo: [{
            id: 'al-5',
            type: 'success',
            msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
            visible: true,
        }, {
            id: 'al-6',
            type: 'info',
            msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
            visible: true,
        }, {
            id: 'al-7',
            type: 'warning',
            msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
            visible: true,
        }, {
            id: 'al-8',
            type: 'danger',
            msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again.</a>',
            visible: true,
        }]
    };

    changeTab(field, id) {
        this.setState({
            [field]: id,
        })
    }

    closeAlertOne = (alert) => {
        const alerts = this.state.alertsOne;
        alerts[alert].visible = false;
        this.setState({
            alerts
        })
    }

    closeAlertTwo = (alert) => {
        const alerts = this.state.alertsTwo;
        alerts[alert].visible = false;
        this.setState({
            alerts
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
                        <BreadcrumbItem active>Alerts</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col md={10} className="my-2">
                    <h2>Alerts</h2>
                    <p className="mb-lg my-2">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Alert } from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2 ">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultAlertsTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultAlertsTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultAlertsTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultAlertsTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg" activeTab={this.state.defaultAlertsTabId}>
                        <TabPane tabId="1" className="p-2">
                            <p className="my-2 ml-3 p-2">Alerts are available for any length of text, as well as an optional dismiss button.</p>
                            {this.state.alertsOne.map((alert, index) => <Alert
                                key={alert.id} isOpen={alert.visible} toggle={() => this.closeAlertOne(index)}
                                color={alert.type} className={classnames(s.alertContainer, "p-2 m-3")}
                            >
                                <div className={s.alertIconContainer}>
                                    <img src={alert.icon} alt="..."/>
                                </div>
                                <div className={s.messageContainer}>
                                    <span dangerouslySetInnerHTML={{__html: alert.msg}} />
                                </div>
                            </Alert>)}
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Alert\n' +
                            '  isOpen={true}\n' +
                            '  toggle={this.closeAlert}\n' +
                            '  color="danger"\n' +
                            '  className={classnames(s.alertContainer, "p-2 m-3")}\n' +
                            '>\n' +
                            '  <h1>Alert Content</h1>\n' +
                            '</Alert>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <Nav tabs className="bg-transparent mt-4 mb-1">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.transparentAlertsTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('transparentAlertsTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.transparentAlertsTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('transparentAlertsTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg mb-4" activeTab={this.state.transparentAlertsTabId}>
                        <TabPane tabId="1" className="p-2">
                            <p className="my-2 ml-3 p-2"> Alerts are available for any length of text, as well as an optional dismiss button.</p>
                            {this.state.alertsTwo.map((alert, index) => <Alert
                                className="alert-transparent p-2 m-3"
                                key={alert.id} isOpen={alert.visible} toggle={() => this.closeAlertTwo(index)}
                                color={alert.type}
                            >
                                <div className={s.messageContainer}>
                                    <span dangerouslySetInnerHTML={{__html: alert.msg}}/>
                                </div>
                            </Alert>)}
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Alert\n' +
                            '  className="alert-transparent"\n' +
                            '  isOpen={true}\n' +
                            '  toggle={this.closeAlert}\n' +
                            '  color="danger"\n' +
                            '>\n' +
                            '  <h1>Alert Content</h1>\n' +
                            '</Alert>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/alerts/" target="_blank" rel="noopener noreferrer">Reactstrap Alerts</a></p>
                </Col>
            </Row>
        );
    }
}

export default Alerts;
