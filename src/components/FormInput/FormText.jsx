import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const FormText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={props.className}>
        <label htmlFor={field.name} className="form-label">
          {label}
        </label>
        <textarea
          name="message"
          id="message"
          className={`form-text  ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
          autoComplete="off"
          style={{ border: meta.touched && meta.error && "1px solid red" }}
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

export default FormText;
