import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner type="grow" color="primary" />
    </div>
  )
}

export default Loader;
