import React from "react";
import "./Selector.scss";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
const Selector = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={`${props.className}`}>
        <div className={`${props.className}-container`}>
          <label htmlFor="">{props.label}</label>
          <div
            className={`${props.className}-container-top space-between`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <h6>{props.selected}</h6>
            <div className={`${props.className}-container-top-icon`}>
              <RiArrowDownSLine />
            </div>
          </div>

          {isActive && (
            <div className={`${props.className}-container-menus`}>
              <div className={`${props.className}-container-menus-content`}>
                {props.data.map((item) => {
                  return (
                    <>
                      <div
                        className={`${props.className}-container-menus-content-item`}
                        onClick={(e) => {
                          props.setSelected(e.target.textContent);
                          setIsActive(!isActive);
                        }}
                      >
                        {item}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Selector;
