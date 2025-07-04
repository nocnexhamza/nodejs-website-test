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
import CustomTooltip from "../../../components/CustomTooltip/CustomTooltip";
import CustomPopover from "../../../components/CustomPopover/CustomPopover";

class NavbarPage extends Component {
    state = {
        defaultPopoversTabId: '1',
        defaultTooltipsTabId: '1',
        mock: [
            {
                placement: "top",
                text: "Top",
                color: "primary"
            },
            {
                placement: "bottom",
                text: "Bottom",
                color: "success"
            },
            {
                placement: "left",
                text: "Left",
                color: "warning"
            },
            {
                placement: "right",
                text: "Right",
                color: "danger"
            }
        ]
    };

    changeTab(field, id) {
        this.setState({
            [field]: id,
        })
    }

    toggle(id) {
        this.setState(prevState => ({
            popovers: {
                ...prevState.popovers,
                [id]: !prevState.popovers[id],
            },
        }))
    }

    render() {
        return (
            <Row>
                <Col md={10}>
                    <Breadcrumb>
                        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                        <BreadcrumbItem>Documentation</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem active>Popovers & Tooltips</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Popovers</h2>
                    <p className="mb-lg">The Popover is similar to Tooltip; it is a pop-up box that appears when the user clicks on an element. The difference is that the popover can contain much more content.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Popover, PopoverHeader, PopoverBody, UncontrolledTooltip } from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultPopoversTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultPopoversTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultPopoversTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultPopoversTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.defaultPopoversTabId}>
                        <TabPane tabId="1">
                            <div className="d-flex flex-wrap">
                                <CustomTooltip
                                    className="mx-2 my-3"
                                    id={"Tooltip"}
                                    target={"Tooltip"}
                                    color="primary"
                                    placement="top"
                                    text="Top"
                                />
                                <CustomTooltip
                                    disabled
                                    id={"Tooltip"}
                                    target={"Tooltip"}
                                    color="primary"
                                    placement="top"
                                    text="Top"
                                    className="mx-2 my-3"
                                />
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Button id="popover" type="button" color="info" onClick={this.toggle}>\n' +
                            '  Top\n' +
                            '</Button>\n\n' +
                            '<Popover placement="top" isOpen={this.state.isPopoverActive} target="popover" toggle={this.toggle}>\n' +
                            '  <PopoverHeader>Popover Title</PopoverHeader>\n' +
                            '  <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>\n' +
                            '</Popover>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <h2>Tooltips</h2>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultTooltipsTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultTooltipsTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultTooltipsTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultTooltipsTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.defaultTooltipsTabId}>
                        <TabPane tabId="1">
                            <div className="d-flex flex-wrap">
                                {this.state.mock.map((item, id) =>
                                    <CustomPopover
                                        key={id}
                                        className="mx-2 my-3"
                                        id={`Popover-${id}`}
                                        color={item.color}
                                        placement={item.placement}
                                        btnLabel={item.text}
                                    />
                                )}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Button id="tooltip" type="button">\n' +
                            '  Left\n' +
                            '</Button>\n\n' +
                            '<UncontrolledTooltip placement="left" target="tooltip">\n' +
                            '  Hello world!\n' +
                            '</UncontrolledTooltip>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/popovers/" target="_blank" rel="noopener noreferrer">Reactstrap Popovers</a>
                        &nbsp;and <a href="https://reactstrap.github.io/components/tooltips/" target="_blank" rel="noopener noreferrer">Reactstrap Tooltips</a></p>
                </Col>
            </Row>
        );
    }
}

export default NavbarPage;
