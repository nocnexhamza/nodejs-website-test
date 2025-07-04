import React from "react";
import ImagesUploader from "../uploaders/ImagesUploader";
import FormErrors from "../formErrors";
import { FastField } from "formik";

const ImagesFormItem = (props) => {
  const {
    name,
    schema,
    hint,
    path,
    fileProps,
    max = undefined,
    inputProps,
    required = false,
  } = props;

  const { label } = schema[name];

  return (
    <FastField
      name={name}
    >
      {({ form }) => {
        return (
          <div className="form-group">
            {!!label && (
              <label
                className={`col-form-label ${
                  required ? 'required' : null
                }`}
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <br />
            <ImagesUploader
              path={path}
              schema={fileProps}
              value={form.values[name]}
              onChange={(value) => {
                form.setFieldValue(name, value);
                form.setFieldTouched(name);
              }}
              max={max}
              {...inputProps}
            />

            <div className="invalid-feedback">
              {FormErrors.displayableError(form, name)}
            </div>
            {!!hint && (
              <small className="form-text text-muted">
                {hint}
              </small>
            )}
          </div>
        )}}
    </FastField>
  );
}

export default ImagesFormItem;
