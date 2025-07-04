import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Progress, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
                    <h2>Progress</h2>
                    <p className="mb-lg">Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Progress } from 'reactstrap';"}
                    </SyntaxHighlighter>
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
                    <TabContent className="mb-xlg my-2 p-2" activeTab={this.state.defaultProgressTabId}>
                        <TabPane tabId="1">
                            <div className="headline-2 my-3 mx-2 p-2">Progress Example</div>
                            <Progress color="info" className="my-3 mx-3" value="25"/>
                            <Progress color="success" className="my-3 mx-3" value="50"/>
                            <Progress color="warning" className="my-3 mx-3" value="75"/>
                            <Progress color="danger" className="my-3 mx-3" value="100"/>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<div className="text-center">0%</div>\n' +
                            '<Progress />\n' +
                            '<div className="text-center">25%</div>\n' +
                            '<Progress value="25" />\n' +
                            '<div className="text-center">50%</div>\n' +
                            '<Progress value={50} />\n' +
                            '<div className="text-center">75%</div>\n' +
                            '<Progress striped value={75} />\n' +
                            '<div className="text-center">100%</div>\n' +
                            '<Progress animated value="100" />\n' +
                            '<div className="text-center">Multiple bars</div>\n' +
                            '<Progress multi>\n' +
                            '  <Progress bar value="15" />\n' +
                            '  <Progress bar color="success" value="30" />\n' +
                            '  <Progress bar color="info" value="25" />\n' +
                            '  <Progress bar color="warning" value="20" />\n' +
                            '  <Progress bar color="danger" value="5" />\n' +
                            '</Progress>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/progress/" target="_blank" rel="noopener noreferrer">Reactstrap Progress</a></p>
                </Col>
            </Row>
        );
    }
}

export default Buttons;
