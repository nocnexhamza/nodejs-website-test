import React from "react";
import PropTypes from "prop-types";
import ImagesUploader from "../uploaders/ImagesUploader";

const ImagesViewItem = (props) => {
  const { value, label } = props;
  console.log("VALUE", value)
  console.log("LABEL", label)

  const valueAsArray = () => {
    if (!value) {
      return [];
    }
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  }

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <div className="form-group mb-4">
      <label className="col-form-label">
        {label}
      </label>
      <br/>
      <ImagesUploader
        readonly
        value={valueAsArray()}
      />
    </div>
  );
}

ImagesViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
}

export default ImagesViewItem;
