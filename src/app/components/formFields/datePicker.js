import React from "react";

const DatePicker = props => {
  return (
    <input
      name={props.input.name}
      {...props.input}
      type="date"
      className="form-control form-label"
    />
  );
};

export default DatePicker;
