import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const InputText = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <textarea
        name="message"
        id="message"
        className={`form-text ${className}  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
        style={{ border: meta.touched && meta.error && "1px solid red" }}
      />
      <ErrorMessage component="div" name={field.name} className="form-error" />
    </>
  );
};

export default InputText;
