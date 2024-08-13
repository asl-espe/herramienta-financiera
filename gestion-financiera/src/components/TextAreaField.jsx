import React from 'react';

const TextAreaField = ({ name, value, onChange, placeholder }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    
  );
};

export default TextAreaField;
