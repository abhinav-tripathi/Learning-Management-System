import React from "react";

const renderField = ({
  input,
  label,
  val,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label className="control-label form-label">{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className="form-control form-label"
        value={val}
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default renderField;
