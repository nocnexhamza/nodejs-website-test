import React, {Component} from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import Scrollspy from "./ScrollSpyComponent";

import calendar from "../../assets/documentation/Calendar.png";
import createEvent from "../../assets/documentation/create event.png";
import loginPage from "../../assets/documentation/login.png";
import logOutPage from "../../assets/documentation/singUp.png";
import userManagement1 from "../../assets/documentation/UserManagment_1.png";
import charts from "../../assets/documentation/charts1.png";
import charts2 from "../../assets/documentation/charts2.png";
import tables from '../../assets/documentation/tables.png';
import dashboard from "../../assets/documentation/Dashboard.png";

export default class Pages extends Component {
    render() {
        return (
            <Row>
                <Col md={10}>
                    <Breadcrumb>
                        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                        <BreadcrumbItem>Documentation</BreadcrumbItem>
                        <BreadcrumbItem active>Pages</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col lg={9}>
                    <Container id="Auth" className="my-4">
                        <h3>Auth</h3>
                        <p>Auth is a built-in module for an admin template dashboard. It contains all actions and handlers for any token authorization for your application.</p>
                        <p><b>Important note.</b> Credentials validation must be on the server side.</p>
                        <p>Another important part of authentication is <code>PrivateRoute</code> component. That’s how it looks like.</p>
                        <SyntaxHighlighter language='javascript' style={tomorrow}>{'const PrivateRoute = ({ dispatch, component, ...rest }) => {\n' +
                        '    if (!Login.isAuthenticated(localStorage.getItem(\'token\'))) {\n' +
                        '        dispatch(logoutUser());\n' +
                        '        return (<Redirect to=\'/login\'/>)\n' +
                        '    } else {\n' +
                        '        return (\n' +
                        '            <Route {...rest} render={props => (React.createElement(component, props))}/>\n' +
                        '        );\n' +
                        '    }\n' +
                        '};'}</SyntaxHighlighter>
                        <p>We are getting <code>token</code> from local storage, that must be saved in local storage after successful loginUser function completion. Depends on the result of this action, <code>PrivateRoute</code> returns page (react component) or redirect to the login page. If you don’t need login functionality in your app, you can use <code>Route</code> instead of <code>PrivateRoute</code>.</p>
                    </Container>
                    <Container id="Dashboard" className="my-4">
                        <h3>Dashboard</h3>
                        <p>The main screen of any application built on the top of the admin dashboard template. That is more informative pages of all application.</p>
                        <p>All of this component can be used on any page of the application.</p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={dashboard} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/template/dashboard">Dashboard</Link>
                        </p>
                    </Container>
                    <Container id="Login Page" className="my-4">
                        <h3>Login Page</h3>
                        <p>Authorization is the process of confirming the rights to perform certain operations - managing an account, changing data.</p>
                        <p>It is necessary to ensure security when performing actions, to differentiate user rights, to protect against intruders.</p>
                        <p>This beautiful widget will help you streamline the process of authorization.</p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={loginPage} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/template/extra/login">Login Page</Link>
                        </p>
                    </Container>
                    <Container id="Sing Up Page" className="my-4">
                        <h3>Sing Up Page</h3>
                        <p>In many cases, the signup page is the last step in a business’s conversion funnel. It’s where prospects navigate after they’ve evaluated a brand and decided its service offers what they need.</p>
                        <p>We hope this beautiful widget will help you in your product development.</p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={logOutPage} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/template/extra/register">Sing Up Page</Link>
                        </p>
                    </Container>
                    <Container id="Calendar" className="my-4">
                        <h3>Calendar</h3>
                        <p>Calendar or Datepicker is a GUI widget that allows the end user to see and select days, months, years, etc. from the calendar. It also includes the possibility of choosing both date and time, or only date.</p>
                        <p>It also includes the possibility of creating, updating, deleting events in calendar.</p>
                        <p>React Datepicker is a Datepicker that is built on the React basis.</p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={calendar} alt="screenshot" />
                            <img className="img-responsive w-100 border my-2" src={createEvent} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/template/calendar">Calendar</Link>
                        </p>
                    </Container>
                    <Container id="User Management" className="my-4">
                        <h3>User Management</h3>
                        <p>This template is a ready-made role-based solution for managing users in your application made with React, Node.js and PostgreSQL.</p>
                        <p>You can perform all major operations with users: create, delete and view roles.</p>
                        <p>This page is only available in Sofia React App with Node.js integration!</p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={userManagement1} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/admin/users">User Management</Link>
                        </p>
                    </Container>
                    <Container id="Charts" className="my-4">
                        <h3>Charts</h3>
                        <p>Charts are the most common data visualization components of mobile and web applications. One of the advantages of JavaScript frameworks like React is that it offers scalable and versatile components.</p>
                        <p>React is a great framework that lets developers build rich and high-quality user interfaces easily, so your users will love to use the app. </p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={charts2} alt="screenshot" />
                            <img className="img-responsive w-100 border my-2" src={charts} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/template/charts/bar">Charts</Link>
                        </p>
                    </Container>
                    <Container id="Tables" className="my-4">
                        <h3>Tables</h3>
                        <p>Good react table must simultaneously correspond to several requirements – responsiveness, speed, readability, etc.</p>
                        <p className="my-2">
                            <img className="img-responsive w-100 border my-2" src={tables} alt="screenshot" />
                            <Link className="btn btn-primary mr-sm" to="/template/tables">Tables</Link>
                        </p>
                    </Container>
                </Col>
                <Col lg={3}>
                    <Scrollspy
                        title="PAGES"
                        prefix="pages"
                        ids={[
                            'Auth',
                            'Dashboard',
                            'Login Page',
                            'Sing Up Page',
                            'Calendar',
                            'User Management',
                            'Charts',
                            'Tables'
                        ]} />
                </Col>
            </Row>
        )
    }
}
