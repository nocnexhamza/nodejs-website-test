import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from "../formErrors";
import { FastField } from "formik";

const RadioFormItemNotFast = (props) => {
  const {
    name,
    form,
    hint,
    errorMessage,
    required = false,
  } = props;

  const { label, options } = props.schema[name];

  return (
    <div className="form-group">
      {!!label && (
        <label className={`col-form-label ${required ? 'required' : null}`}>
          {label}
        </label>
      )}

      <br/>

      {options.map((option) => (
        <div
          key={option.value}
          className="form-check form-check-inline"
        >
          <input
            type="radio"
            className={`form-check-input ${FormErrors.validateStatus(form, name, errorMessage)}`}
            name={`${name}-${option.value}`}
            value={option.value}
            checked={option.value === form.values[name]}
            onChange={(e) => {
              form.setFieldValue(name, e.target.value);
              form.setFieldTouched(name);
            }}
          />
          <label
            htmlFor={`${name}-${option.value}`}
            className="form-check-label"
          >
            {option.label}
          </label>
        </div>
      ))}

      <div className="invalid-feedback">
        {FormErrors.displayableError(form, name, errorMessage)}
      </div>

      {!!hint && (
        <small className="form-text text-muted">
          {hint}
        </small>
      )}
    </div>
  );
}

RadioFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const RadioFormItem = (props) => {
  return (
    <FastField
      name={props.name}
    >
      {({ form }) => (
        <RadioFormItemNotFast
          {...props}
          form={form}
        />
      )}
    </FastField>
  )
}

export default RadioFormItem;
