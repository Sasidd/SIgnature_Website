import React from "react";
import "./Input.scss";
import { ErrorMessage, useField } from "formik";
const Input = ({ label, place, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="input-field">
        <label htmlFor={field.name}>{label}</label>
        <input
          placeholder={place}
          type="text"
          {...field}
          {...props}
          autoComplete="off"
          // style={{padding:'1.5rem 0rem'}}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="form-error"
        />
      </div>
    </>
  );
};

export default Input;
