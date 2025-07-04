import React from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import Widget from "../../../components/Widget/Widget";
import Formsy from "formsy-react";
import InputValidation from "../../../components/InputValidation/InputValidation";
import FormikForm from "./formik/FormikForm";

export default function Validation() {

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">Simple Validation</div>
                <Formsy>
                  <fieldset className="mb-4">
                    <legend>
                      By default validation is started only after at least 3 characters have been input.
                    </legend>
                    <FormGroup row>
                      <Label md={3} xs={12} for="basic" className="headline-3">Simple required</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text"
                          id="basic"
                          name="basic"
                          required
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} xs={12} for="basic-change" className="headline-3">Min-length field</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text"
                          id="basic-change"
                          name="basic-change"
                          trigger="change"
                          validations={{ minLength: 10 }}
                          validationError={{
                            minLength: 'This value is too short. It should have 10 characters or more.',
                          }}
                          required
                        />
                      </Col>
                    </FormGroup>
                  </fieldset>
                  <fieldset className="mb-4">
                    <legend>
                      <span className="badge badge-primary mr-1">HTML5</span>
                      input types supported
                    </legend>
                    <FormGroup row>
                      <Label md={3} xs={12} for="email" className="headline-3">E-mail</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text"
                          id="email"
                          name="email"
                          trigger="change"
                          required
                          validations="isEmail"
                          validationError={{ isEmail: 'This value should be a valid email.'}}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} xs={12} for="number" className="headline-3">Number</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text"
                          id="number"
                          name="number"
                          required
                          validations="isNumeric"
                          validationError={{ isNumeric: 'This value should be a number.' }}
                        />
                      </Col>
                    </FormGroup>
                  </fieldset>
                  <fieldset>
                    <legend>
                      More validation
                    </legend>
                    <FormGroup row>
                      <Label md={3} xs={12} for="password" className="headline-3">Password</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="password"
                          id="password"
                          name="password"
                          trigger="change"
                          className="mb-3"
                          validations={{ minLength: 6 }}
                          validationError={{
                            minLength: 'This value is too short. It should have 6 characters or more.',
                          }}
                          required
                        />
                      </Col>
                      <Label md={3} xs={12} for="password" className="headline-3">Confirm password</Label>
                      <Col>
                        <InputValidation
                          type="password"
                          id="password-r"
                          name="password-r"
                          trigger="change"
                          validations={{ equalsField: 'password', minLength: 6 }}
                          validationError={{
                            equalsField: 'This value should be the same.',
                            minLength: 'This value is too short. It should have 6 characters or more.',
                          }}
                          required
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} xs={12} for="website" className="headline-3">Website</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text"
                          id="website"
                          name="website"
                          trigger="change"
                          validations="isUrl"
                          validationError={{
                            isUrl: 'This value should be a valid url.',
                          }}
                          required
                        />
                      </Col>
                    </FormGroup>
                  </fieldset>
                  <div className="d-flex justify-content-between mt-4">
                    <Button type="reset" color="secondary" className="">Cancel</Button>
                    <Button type="submit" color="primary" className="float-right">Validate & Submit</Button>
                  </div>
                </Formsy>
              </Widget>
            </Col>
            <Col xs={12} lg={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">Formik Validation</div>
                <legend>
                  Example of form using Formik validation. Just try it to see how it works!
                </legend>
                <div className="px-0 px-md-3">
                  <FormikForm/>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
