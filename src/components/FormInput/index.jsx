import React from 'react';
import './style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (

  <div className="group">
    <input type="text" className="formInput" onChange={handleChange} {...otherProps} />
    {
      label &&
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
          } formInputLabel`}>
        {label}
      </label>
    }
  </div>
);

export default FormInput;