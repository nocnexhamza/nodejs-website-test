import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomModal from "../../../components/CustomModal/CustomModal";

class Modals extends Component {
    state = {
        defaultModalTabId: '1',
        variatonModalsTabId: '1',
        demo: false,
        scrollingLong: false,
        large: false,
    };

    toggle(id) {
        this.setState(prevState => ({
            [id]: !prevState[id],
        }));
    }

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
                        <BreadcrumbItem active>Modal</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Modal</h2>
                    <p className="mb-lg">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultModalTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultModalTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultModalTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultModalTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.defaultModalTabId}>
                        <TabPane tabId="1">
                            <div className="my-2 p-2">
                                <p className="p-2 mx-2 text-center">
                                    Toggle a working modal demo by clicking the button below.
                                    It will slide down and fade in from the top of the page.
                                </p>
                                <p className="mx-2 p-2 text-center">
                                    If body of modal should be scrollable when content is long just add <code>scrollable</code> property
                                </p>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", padding: "0 16px 16px"}}>
                                <CustomModal
                                    buttonLabel="Basic Modal"
                                    buttonColor="primary"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </CustomModal>
                                <CustomModal
                                    buttonLabel="Scrollable Modal"
                                    buttonColor="success"
                                    scrollable
                                />
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Modal isOpen={} toggle={}>\n' +
                            '  <ModalHeader toggle={}>Modal title</ModalHeader>\n' +
                            '  <ModalBody className="bg-white">\n' +
                            '    ...\n' +
                            '  </ModalBody>\n' +
                            '  <ModalFooter>\n' +
                            '    <Button color="secondary" onClick={}>Scrollable Modal</Button>\n' +
                            '  </ModalFooter>\n' +
                            '</Modal>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/modals/" target="_blank" rel="noopener noreferrer">Reactstrap Modal</a></p>
                </Col>
            </Row>
        );
    }
}

export default Modals;
