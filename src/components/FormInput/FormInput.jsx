import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
const FormInput = ({ label, place, ...props }) => {
  const [field, meta] = useField(props);
  const [icon, setIcon] = useState(props.iconField);
  const [deleteIcon, setDseleteIcon] = useState(props.iconDelete);

  return (
    <>
      <div className={props.margin}>
        <div className={props.className}>
          <div className={`${props.className}-label`}>
            <label htmlFor={field.name} className="form-label">
              {label}
            </label>
            <p>{props.number}</p>
          </div>
          <div
            className={`${props.className}-input  ${props.colorInput} ${props.leftpadding}`}
          >
            {icon ? <img src={props.icon} alt="icon" /> : ""}
            <p>{props.color}</p>
            <input
              placeholder={place}
              type="text"
              className={`form-input ${
                meta.touched && meta.error && "is-invalid"
              } `}
              {...field}
              {...props}
              autoComplete="off"
            />
            {deleteIcon ? (
              <div className={`${props.className}-input-deleteicon`}>
                <RiDeleteBin6Line />
              </div>
            ) : (
              ""
            )}
          </div>
          <ErrorMessage
            component="div"
            name={field.name}
            className="form-error"
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
