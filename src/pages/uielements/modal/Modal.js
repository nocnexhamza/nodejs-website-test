import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  FormGroup,
} from 'reactstrap';
import CustomModal from "../../../components/CustomModal/CustomModal";
import Widget from "../../../components/Widget/Widget";
import s from "./Modal.module.scss";

export default function Modal() {

  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <Row className="gutter mb-4">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Live Demo</div>
                <div className="mt-2 mb-3 body-3 muted">
                  <p>
                    Toggle a working modal demo by clicking the button below.
                    It will slide down and fade in from the top of the page.
                  </p>
                  <p>
                    If body of modal should be scrollable when content is long just add <code>scrollable</code> property
                  </p>
                </div>
                <CustomModal
                  buttonLabel="Demo"
                  buttonColor="primary"
                >
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </CustomModal>
                <CustomModal
                  buttonLabel="Long Content"
                  buttonColor="primary"
                  size="sm"
                  outline
                  subscribing
                >
                  Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </CustomModal>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Optional Sizes</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>.
                  These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
                  Our default modal without modifier class constitutes the “medium” size modal. But you can use <code>size="lg"</code> or <code>size="sm"</code> properties to choose size you want.
                </div>
                <CustomModal
                  buttonLabel="Large"
                  buttonColor="secondary-red"
                  size="lg"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CustomModal>
                <CustomModal
                  buttonLabel="Small"
                  buttonColor="secondary-yellow"
                  size="sm"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CustomModal>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4 mb-md-0">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md h-100">
                <div className="headline-2">Form Dialogs</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Form dialogs allow users to fill out form fields within a dialog. Just add and set form components into your Modal component.
                </div>
                <CustomModal
                  buttonLabel="Open Form Dialog"
                  buttonColor="success"
                  subscribing
                >
                  <Form >
                    <div className="mb-4">
                      To subscribe to this website, please enter your email address here. We will send updates occasionally.
                    </div>
                    <FormGroup>
                      <Label for="exampleEmail">Email Address</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Placeholder" />
                    </FormGroup>
                  </Form>
                </CustomModal>
              </Widget>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row className="gutter" style={{ height: "100%"}}>
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Modal Components</div>
                <div className="mt-2 mb-4 body-3 muted">
                  Utilize the Bootstrap grid system within a modal by nesting <code>&lt;Container fluid&gt;</code> within
                  the <code>&lt;ModalBody&gt;</code>. Then, use the normal grid system classes as you would anywhere else.
                </div>
                <CustomModal
                  buttonLabel="Grid"
                  buttonColor="primary"
                >
                  <Container fluid>
                    <Row>
                      <Col md={4}><div className={s.column}>.col-md-4</div></Col>
                      <Col md={8}><div className={s.column}>.col-md-8</div></Col>
                    </Row>
                    <Row className="mt-sm">
                      <Col md={6}><div className={s.column}>.col-md-6</div></Col>
                      <Col md={6}><div className={s.column}>.col-md-6</div></Col>
                    </Row>
                    <Row className="mt-sm">
                      <Col md={8}><div className={s.column}>.col-md-8</div></Col>
                      <Col md={4}><div className={s.column}>.col-md-4</div></Col>
                    </Row>
                    <Row className="mt-sm">
                      <Col ><div className={s.column}>.col-md-12</div></Col>
                    </Row>
                  </Container>
                </CustomModal>
                <pre className="bg-light border-0 w-100 h-100 p-3">
                  <code className="text-danger">{'<Container fluid>\n'}</code>
                  <code className="text-success">{'  <Row>\n'}</code>
                  <code className="text-info">{'    <Col md={4}>\n'}</code>
                  <code>{'      .col-md-4\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-info">{'    <Col md={4} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-4 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-success">{'  </Row>\n'}</code>
                  <code className="text-success">{'  <Row>\n'}</code>
                  <code className="text-info">{'    <Col md={3} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-3 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-info">{'    <Col md={4} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-4 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-success">{'  </Row>\n'}</code>
                  <code className="text-success">{'  <Row>\n'}</code>
                  <code className="text-info">{'    <Col md={6} className="ml-auto">\n'}</code>
                  <code>{'      .col-md-6 .ml-auto\n'}</code>
                  <code className="text-info">{'    </Col>\n'}</code>
                  <code className="text-success">{'  </Row>\n'}</code>
                  <code className="text-danger">{'</Container>'}</code>
                </pre>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
