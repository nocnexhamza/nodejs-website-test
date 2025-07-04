import React from 'react';
import { withFormsy } from 'formsy-react';

const InputValidation = (props) => {

  const {
    trigger = null,
    type = 'text',
    className = '',
    name = '',
    id = '',
    placeholder = '',
    ...restProps
  } = props;

  const changeValue = (event) => {
    props.setValue(event.currentTarget.value)
  }

  const errorMessageObject = props.isFormSubmitted
    ? props.errorMessage
    : null;
  const required = (props.isFormSubmitted && props.showRequired)
    ? <div className={'help-block text-danger label'}>This value is required</div>
    : null;
  const errorMessage = [];
  if (errorMessageObject) {
    Object.keys(errorMessageObject).forEach((type) => {
      errorMessage.push(errorMessageObject[type]);
    })
  }
  const errorList = errorMessage.map((message, index) =>
    <div key={`message-err${index.toString()}`} className={'help-block text-danger label'}>{message}</div>
  )

  return (
    <div className={props.className}>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={'form-control'}
        onChange={(event) => changeValue(event)}
        value={props.value || ''}
        placeholder={props.placeholder}
      />
      {required ? required : errorList}
    </div>
  )
}

export default withFormsy(InputValidation);
