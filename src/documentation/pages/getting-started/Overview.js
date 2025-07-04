import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import dashboard from "../../../assets/documentation/Dashboard.png";
import Scrollspy from "../ScrollSpyComponent";

const Overview = () => (
    <Row>
        <Col md={10}>
            <Breadcrumb>
                <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem>Getting Started</BreadcrumbItem>
                <BreadcrumbItem active>Overview</BreadcrumbItem>
            </Breadcrumb>
        </Col>
        <Col lg={9}>
            <Container id="Overview" className="my-3">
                <h1>Overview</h1>
                <p className="lead mb-3 mt-3">
                    Sofia React is an admin dashboard template built with React 16.5.2. Sofia React goes beyond usual admin
                    templates and provides you entire intuitive programming framework. You can use Sofia Blue React to build any type of web applications
                    like SAAS, CMS, financial dashboards, project management tools, etc.
                </p>
                <img className="img-responsive w-100 border mb-2 mt-2" src={dashboard} alt="screenshot" />
                <Link to="/template/dashboard" className="mb-3 mt-3">Live demo</Link>
            </Container>
            <Container id="Features" className="my-3">
                <h3 className="mt-2 mb-2">Features</h3>
                <ul className="mt-3 mb-3">
                    <li className="lead"><i className="la la-check" /> Dozens of Pages</li>
                    <li className="lead"><i className="la la-check" /> Fully Responsive</li>
                    <li className="lead"><i className="la la-check" /> React 17 new</li>
                    <li className="lead"><i className="la la-check" /> 5 Charts Library</li>
                    <li className="lead"><i className="la la-check" /> Static & Hover Sidebar</li>
                    <li className="lead"><i className="la la-check" /> Fully Documented Codebase</li>
                    <li className="lead"><i className="la la-check" /> And even more coming soon!</li>
                </ul>
            </Container>
            <Container id="Support" className="my-3">
                <h2 className="mt-2 mb-2">Support forum</h2>
                <p className="lead mb-2 mt-2">For any additional information please go to our support forum and raise your questions or feedback provide there. We highly appreciate your participation!</p>
                <a href="https://flatlogic.com/forum" target="_blank" rel="noopener noreferrer" className="btn btn-default fw-semi-bold mt-3 mb-3">
                    Support forum
                </a>
            </Container>
            <Container className="my-3">
                <Row>
                    <Col md={5}>
                        <Container>
                            <Link to="/documentation/getting-started/licences">
                                <p>Continue with</p>
                                <h4>Licences <i className="la la-arrow-right"/></h4>
                            </Link>
                        </Container>
                    </Col>
                    <Col md={5}>
                        <Container>
                            <Link to="/documentation/getting-started/quick-start">
                                <p>Or learn about</p>
                                <h4>How to start project <i className="la la-arrow-right"/></h4>
                            </Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Col>
        <Col lg={3}>
            <Scrollspy
                title="OVERVIEW"
                prefix="getting-started/overview"
                ids={[
                    'Overview',
                    'Features',
                    'Support'
                ]}
            />
        </Col>
    </Row>
);

export default Overview;
