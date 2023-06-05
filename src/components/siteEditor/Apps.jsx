import React from "react";
import Heading from "../heading/Heading";

import { basicStyleTab, calltoAction } from "../../data/tabApp";

const Apps = () => {
  return (
    <>
      <div className="apps">
        <div className="apps-container">
          <Heading className="editor">Enhance your signature</Heading>
          <div className="m-3">
            <div>
              <div className="apps-container-grid">
                {basicStyleTab.map((item) => {
                  return (
                    <>
                      <AppTabButton icon={item.image} text={item.text} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <Heading className="editor">Call to action</Heading>
          <div className="m-3">
            <div className="apps-container-grid">
              {calltoAction.map((item) => {
                return (
                  <>
                    <AppTabButton icon={item.image} text={item.text} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;

const AppTabButton = (props) => {
  return (
    <>
      <div className="tab_button_app">
        <button {...props}>
          <img src={props.icon} alt="icon" />
          {props.text}
        </button>
      </div>
    </>
  );
};
