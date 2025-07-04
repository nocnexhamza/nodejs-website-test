import React, {Component, useEffect, useState} from "react";
import { Alert } from "reactstrap";
import cx from "classnames";
import UsersListTable from "./UsersListTable";

import s from "../Users.module.scss";

const UsersListPage = () => {
  const [promoAlert, setPromoAlert] = useState(false)

  const showPromoAlert = () => setPromoAlert(true)

  useEffect(() => {
    setTimeout(() => {
      showPromoAlert()
    }, 100)
  })

  return (
    <div>
      <div className="page-top-line">
        <h2 className="page-title">User <span className="fw-semi-bold">Management</span></h2>
        <Alert
          color="primary"
          className={cx(s.promoAlert, {[s.showAlert]: promoAlert})}
        >
          This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com" target="_blank">Sofia React App with Node.js</a> integration!
        </Alert>
      </div>
      <UsersListTable />
    </div>
  );
}

export default UsersListPage;
