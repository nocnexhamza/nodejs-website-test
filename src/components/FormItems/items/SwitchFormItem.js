import React, { Component } from "react";
import PropTypes from "prop-types";
import FormErrors from "../formErrors";
import { FastField } from "formik";

const SwitchFormItemNotFast = (props) => {
  const {
    name,
    form,
    hint,
    size,
    inputProps,
    errorMessage,
    required,
  } = props;

  const { label } = props.schema[name];

  const sizeLabelClassName = {
    small: 'col-form-label-sm',
    large: 'col-form-label-lg',
  }[size] || '';

  return (
    <div className="form-group">
      {!!label && (
        <label
          className={`col-form-label ${required ? 'required' : null} ${sizeLabelClassName}`}
          htmlFor={name}>
          {label}
        </label>
      )}

      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={(event) => {
            form.setFieldValue(
              name,
              event.target.checked,
            );
            form.setFieldTouched(name);
          }}
          checked={!!form.values[name]}
          {...inputProps}
        />

        <label htmlFor={name} >
          &#160;
        </label>
      </div>

      <div className="invalid-feedback">
        {FormErrors.displayableError(
          form,
          name,
          errorMessage,
        )}
      </div>

      {!!hint && (
        <small className="form-text text-muted">
          {hint}
        </small>
      )}
    </div>
  );
}

SwitchFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.string,
  size: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
}

const SwitchFormItem = (props) => {
  return (
    <FastField
      name={props.name}
    >
      {({ form }) => (
        <SwitchFormItemNotFast
          {...props}
          form={form}
        />
      )}
    </FastField>
  )
}

export default SwitchFormItem;
