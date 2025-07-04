import React, { Component, useEffect } from "react";
import UsersView from "./UsersView";
import actions from "../../../actions/usersFormActions";
import { connect } from "react-redux";

const UsersPage = (props) => {

  const { dispatch, match, loading, record } = props;
  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <>
      <UsersView
        loading={loading}
        record={record}
      />
    </>
  )
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(UsersPage)
