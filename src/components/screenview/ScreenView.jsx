import React from "react";
import "./ScreenView.scss";

const ScreenView = (props) => {
  return (
    <>
      <div className="screenview">
        <div className="screenview-container">
          <div className="screenview-container-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="screenview-container-middle"></div>
          <div className="screenview-container-bottom"></div>
          <div className="screenview-container-content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default ScreenView;
