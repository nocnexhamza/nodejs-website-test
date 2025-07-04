import React  from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Button,
} from "reactstrap";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  acceptedTerms: false,
  jobType: "",
};

class FormikForm extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-4">Subscribe!</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            password: Yup.string()
              .min(8, 'Password is too short - should be 8 chars minimum.')
              .required("Required"),
            passwordConfirmation: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
            jobType: Yup.string()
              .oneOf(
                ["designer", "development", "product", "other"],
                "Invalid Job Type"
              )
              .required("Required")
          })}
          onSubmit={fields => {
            alert('SUCCESS!!!')
          }}
          render={({ errors, status, touched}) => (
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <Field name="passwordConfirmation" type="password" className={'form-control' + (errors.passwordConfirmation && touched.passwordConfirmation ? ' is-invalid' : '')} />
                <ErrorMessage name="passwordConfirmation" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label>Job Type</label>
                <Field name="jobType">
                  {({ field }) => (
                    <select {...field} className={'form-control' + (errors.jobType && touched.jobType ? ' is-invalid' : '')}>
                      <option key={0} value="">Select a job type</option>
                      <option key={1} value="designer">Designer</option>
                      <option key={2} value="development">Developer</option>
                      <option key={3} value="product">Product Manager</option>
                      <option key={4} value="other">Other</option>
                    </select>
                  )}
                </Field>
                <ErrorMessage name="jobType" component="div" className="invalid-feedback" />
              </div>
              <div className="form-check checkbox checkbox-primary ml-3 mt-4">
                <Field type="checkbox" name="acceptedTerms" className={'form-check-input styled' + (errors.acceptedTerms && touched.acceptedTerms ? ' is-invalid' : '')} />
                <label htmlFor="acceptedTerms" className="form-check-label">Accept Terms & Conditions</label>
                <ErrorMessage name="acceptedTerms" component="div" className="invalid-feedback" />
              </div>
              <div className="d-flex justify-content-between mt-5">
                <Button color="primary" type="submit">Submit</Button>
                <Button color="secondary" type="reset">Cancel</Button>
              </div>
            </Form>
          )}
        />
      </>
    )
  }
}

export default FormikForm;



