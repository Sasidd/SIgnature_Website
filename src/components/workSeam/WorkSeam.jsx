import React from "react";
import "./WorkSeam.scss";
import {
  google,
  macmail,
  mail,
  outdesk,
  outweb,
  outy,
  iphone,
} from "../../assests";

const WorkSeam = () => {
  return (
    <>
      <div className="seam">
        <div className="workseam">
          <div className="workseam-container">
            <div className="workseam-container-top">
              <Item image={mail}>Gmail</Item>
              <Item image={google}>Google workspace</Item>
              <Item image={outdesk}>Outlook Desktop</Item>
              <Item image={outweb}>Outlook Web</Item>
            </div>
            <div className="workseam-container-bottom">
              <Item image={macmail}>Mac Mail</Item>
              <Item image={iphone}>ipone</Item>
              <Item image={outy}>Outlook Web</Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSeam;

const Item = (props) => {
  return (
    <>
      <div className="workseam-card">
        <img src={props.image} alt="icon" />
        <p>{props.children}</p>
      </div>
    </>
  );
};
