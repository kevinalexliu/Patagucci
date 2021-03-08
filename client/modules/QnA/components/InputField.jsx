/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { FormInputField } from './AnswerForm/styles.js';

const InputField = ({
  type, width, height, label, placeholder,
}) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <>
      <label htmlFor={label}>
        {label}
        <span> *</span>
      </label>
      <FormInputField
        type={type}
        value={input}
        onChange={(event) => handleChange(event)}
        width={width}
        height={height}
        placeholder={placeholder}
        maxLength="60"
        required
      />
    </>
  );
};

export default InputField;
