import React, { Component } from "react";
import { Formik } from "formik";
import Loader from "../../Loader/Loader";
import InputFormItem from "../../FormItems/items/InputFormItem";
import Widget from "../../Widget/Widget";
import IniValues from "../../FormItems/iniValues";
import usersFields from "../usersFields";
import FormValidations from "../../FormItems/formValidations";

const ChangePasswordForm = (props) => {

  const { saveLoading, isEditing, findLoading, record } = props;

  const iniValues = () => {
    return IniValues(usersFields, props.record || {});
  }

  const formValidations = () => {
    return FormValidations(usersFields, props.record || {});
  }

  const handleSubmit = (values) => {
    const { ...data } = values || {};
    props.onSubmit(data);
  };

  const title = () => {
    return "Change Password"
  }

  const passwordSchema = {
    currentPassword: { type: 'string', label: 'Current Password' },
    newPassword: { type: 'string', label: 'New Password' },
    confirmNewPassword: { type: 'string', label: 'Confirm new Password' },
  };

  const renderForm = () => {
    return (
      <Widget className="widget-p-md">
        <Formik
          onSubmit={handleSubmit}
          initialValues={iniValues()}
          validationSchema={formValidations()}
        >
          {(form) => {
            return (
              <form onSubmit={props.handleSubmit}>

                <InputFormItem
                  name={'currentPassword'}
                  password
                  schema={passwordSchema}
                />

                <InputFormItem
                  name={'newPassword'}
                  schema={passwordSchema}
                  password
                />

                <InputFormItem
                  name={'confirmNewPassword'}
                  schema={passwordSchema}
                  password
                />
                <div>
                  <button
                    className="btn btn-primary mr-3"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    {' '}
                    Change Password
                  </button>{' '}

                  <button
                    className="btn btn-secondary"
                    type="button"
                    disabled={saveLoading}
                    onClick={() => props.onCancel()}
                  >
                    {' '}
                    Cancel
                  </button>
                </div>
              </form>
            )
          }}
        </Formik>
      </Widget>
    );
  }

  if (findLoading) {
    return <Loader />;
  }

  if (isEditing && !record) {
    return <Loader />;
  }

  return renderForm();

}

export default ChangePasswordForm;
