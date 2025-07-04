import React from 'react';
import {Row, Col, Breadcrumb, BreadcrumbItem, Container} from "reactstrap";

const QuickStart = () => (
    <Row>
        <Col md={10}>
            <Breadcrumb>
                <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem>Getting started</BreadcrumbItem>
                <BreadcrumbItem>Quick Start</BreadcrumbItem>
            </Breadcrumb>
        </Col>
        <Col md={9}>
            <Container className="mt-4 mb-5">
                <h5>Requirements:</h5>
                <ol className="mt-3 mb-4">
                    <li>1. Mac OS X, Windows, or Linux</li>
                    <li>2. Yarn package + Node.js v6.5 or newer</li>
                </ol>
                <h5>Quick Start:</h5>
                <ol className="mt-3 mb-4">
                    <li>1. Run <code> yarn install</code></li>
                    <li>2. Run <code>yarn start</code></li>
                </ol>
                <h5>There are also other npm tasks:</h5>
                <ul className="mt-3 mb-3">
                    <li><code>yarn build</code>: if you need to build the app (without running a dev server)</li>
                    <li><code>yarn lint</code>: to check the source code for syntax and potential issues</li>
                </ul>
            </Container>
            <p>For more instruction please refer to Sofia React readme.md.</p>
        </Col>
    </Row>
);

export default  QuickStart;
