import React from "react";
import Loader from "../../Loader/Loader";
import TextViewItem from "../../FormItems/items/TextViewItem";
import ImagesViewItem from "../../FormItems/items/ImagesViewItem";
import Widget from "../../Widget/Widget";

const UsersView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Loader/>
  }

  return (
    <Widget className="widget-p-md">
      <div className="headline-2 mb-4">
        User View
      </div>

      <ImagesViewItem
        label={'Avatar'}
        value={record.avatar}
      />

      <TextViewItem
        label={'First name'}
        value={record.firstName}
      />

      <TextViewItem
        label={'Last Name'}
        value={record.lastName}
      />

      <TextViewItem
        label={'Phone number'}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={'Email'}
        value={record.email}
      />

      <TextViewItem
        label={'Disabled'}
        value={record.disabled}
      />
    </Widget>
  );
}

export default UsersView;


