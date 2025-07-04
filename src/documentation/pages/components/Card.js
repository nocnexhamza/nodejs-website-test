import React, { Component } from 'react';
import {
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    CardImg, CardText
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import classnames from 'classnames';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import lifestyleImg from "../../../assets/cards/lifestyleImg.png";


class Cards extends Component {
    state = {
        defaultCardTabId: '1',
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
                        <BreadcrumbItem active>Card</BreadcrumbItem>
                    </Breadcrumb>
                </Col>

                <Col md={10} className="my-2">
                    <h2>Card</h2>
                    <p className="mb-lg">Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
                    <SyntaxHighlighter language='javascript' style={tomorrow}>
                        {"import { Card, CardBody } from 'reactstrap';"}
                    </SyntaxHighlighter>
                    <Nav tabs className="bg-transparent my-2">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultCardTabId === '1' })}
                                onClick={() => {
                                    this.changeTab('defaultCardTabId', '1');
                                }}
                            >
                                Example
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.defaultCardTabId === '2' })}
                                onClick={() => {
                                    this.changeTab('defaultCardTabId', '2');
                                }}
                            >
                                Code
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className="mb-xlg my-2" activeTab={this.state.defaultCardTabId}>
                        <TabPane tabId="1">
                            <Card className="border-0">
                                <CardImg top width="100%" src={lifestyleImg} alt="Heterosexual couple" />
                                <CardBody>
                                    <CardText className="body-3 text-dark-gray text-center my-2 p-2">Some quick example text to make up the bulk of the card's content.</CardText>
                                    <div className="w-100 text-center">
                                        <Button className="btn-rounded my-2" color="warning">Get More Information</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </TabPane>
                        <TabPane tabId="2">
                            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<Card className="border-0">\n' +
                            '  <CardBody>\n' +
                            '    <div class="d-flex justify-content-between mb-lg">\n' +
                            '      <div className="w-100 text-center">\n' +
                            '        <Button className="btn-rounded mt-3" color="warning">Get More Information</Button>\n' +
                            '      </div>\n' +
                            '      <span className="text-muted"><small>342 REVIEWS</small></span>\n' +
                            '    </div>\n' +
                            '    <div className="mb-lg">\n' +
                            '      <h3 className="text-success mb-0">69%</h3>\n' +
                            '      of customers recomend this product\n' +
                            '    </div>\n' +
                            '  </CardBody>\n' +
                            '</Card>'}</SyntaxHighlighter>
                        </TabPane>
                    </TabContent>
                    <p className="p-1">For more examples please refer to <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">Reactstrap Card</a></p>
                </Col>
            </Row>
        );
    }
}

export default Cards;
