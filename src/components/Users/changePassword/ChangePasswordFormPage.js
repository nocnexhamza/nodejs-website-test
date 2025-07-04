import React, {useState, Component, useEffect} from 'react';
import ChangePasswordForm from "./ChangePasswordForm";
import { push } from "connected-react-router";
import actions from "../../../actions/usersFormActions";
import { connect } from "react-redux";
import { Alert } from 'reactstrap';
import cx from 'classnames';

import s from "../Users.module.scss";

const ChangePasswordFormPage = (props) => {
  const [promoAlert, setPromoAlert] = useState(false);

  const showPromoAlert = () => {
    setPromoAlert(true)
  }

  const doSubmit = (data) => {
    props.dispatch(actions.doChangePassword(data))
  }

  useEffect(() => {

    setTimeout(() => {
      showPromoAlert()
    }, 1000)
  })

  return (
    <React.Fragment>
      <div className="page-top-line">
        <h2 className="page-title">User <span className="fw-semi-bold">Password</span></h2>
        <Alert
          color="primary"
          className={cx(s.promoAlert, {[s.showAlert]: promoAlert})}
        >
          This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com" target="_blank">Sofia React App with Node.js</a> integration!
        </Alert>
      </div>
      <ChangePasswordForm
        saveLoading={props.saveLoading}
        findLoading={props.findLoading}
        onSubmit={doSubmit}
        onCancel={() => props.dispatch(push('/admin/users'))}
      />
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    findLoading: store.users.form.findLoading,
    saveLoading: store.users.form.saveLoading,
    record: store.users.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(ChangePasswordFormPage);
