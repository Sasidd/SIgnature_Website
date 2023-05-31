import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <div className={`${props.className}`}>
        <button className={`${props.className}`} disabled={props.disabled}>
          {props.children}
        </button>
      </div>
    </>
  );
};

export default Button;
