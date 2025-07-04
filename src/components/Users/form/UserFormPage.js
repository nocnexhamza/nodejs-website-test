import React, { useState, useEffect } from 'react';
import UsersForm from "./UsersForm";
import { push } from "connected-react-router";
import { connect } from 'react-redux';
import actions from "../../../actions/usersFormActions";
import { Alert } from 'reactstrap';
import cx from 'classnames';

import s from "../Users.module.scss";

const UserFormPage = (props) => {
  const [dispatched, setDispatched] = useState(false)
  const [promoAlert, setPromoAlert] = useState(false)

  const {
    dispatch,
    match,
    saveLoading,
    findLoading,
    record,
    currentUser
  } = props;

  const showPromoAlert = () => {
    setPromoAlert(true)
  }

  const isEditing = () => {
    return !!match.params.id;
  }

  const isProfile = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const currentUserId = currentUser.id;
    if (match.params.id === currentUserId) {
      return true;
    }
    return match.url === '/template/edit_profile';
  }

  const doSubmit = (id, data) => {
    if (isEditing() || isProfile()) {
      dispatch(actions.doUpdate(id, data, isProfile()));
    } else {
      dispatch(actions.doCreate(data))
    }
  }

  useEffect(() => {
    if (isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      if (isProfile()) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const currentUserId = currentUser?.user?.id;
        dispatch(actions.doFind(currentUserId))
      } else {
        dispatch(actions.doNew());
      }
    }
    setDispatched(true)
    setTimeout(() => {
      showPromoAlert();
    }, 100)
  }, [match, dispatch])

  return (
    <React.Fragment>
      <div className="page-top-line">
        <h2 className="page-title">Edit Profile</h2>
        <Alert
          color="primary"
          className={cx(s.promoAlert, {[s.showAlert]: promoAlert})}
        >
          This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com" target="_blank">Sofia React App with Node.js</a> integration!
        </Alert>
      </div>
      {dispatched && (
        <UsersForm
          saveLoading={saveLoading}
          findLoading={findLoading}
          currentUser={currentUser}
          record={
            (isEditing() || isProfile()) ? record : {}
          }
          isEditing={isEditing()}
          isProfile={isProfile()}
          onSubmit={doSubmit}
          onCancel={() => dispatch(push('/admin/users'))}
        />
      )}
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

export default connect(mapStateToProps)(UserFormPage);


