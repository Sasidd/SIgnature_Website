import React from "react";
import {
  call,
  location,
  mailicon,
  pic,
  signature6,
  website,
} from "../../assests";
import "./Signature.scss";

// icons
import { AiFillYoutube } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";

const Signature6 = () => {
  return (
    <>
      <div className="signature6">
        <div className="signature6-container">
          <div className="signature6-container-profile">
            <img src={pic} alt="profile" />
            <div className="signature6-container-profile-icons space-center">
              <div>
                <AiFillYoutube />
              </div>
              <div>
                <GrLinkedinOption />
              </div>
              <div>
                <ImFacebook />
              </div>
            </div>
          </div>
          <div className="signature6-container-content">
            <h3>Emmie Paterson</h3>
            <p>Sales & Marketing</p>
            <div className="signature6-container-content-line" />
            <div className="signature6-container-content-items">
              <Item icon={mailicon} text="emmie@gmail.com" />
              <Item icon={call} text="+030 323 22 33" />
              <Item icon={website} text="mywebsite.com" />
              <Item
                icon={location}
                text="32 3rd Ave, New York, NY 10002, USA"
              />
            </div>
            <div className="signature6-container-content-subscribe space-center ">
              <p>Subscribe to my Youtube</p>
              <AiFillYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature6;

// Sub components

const Item = (props) => {
  return (
    <>
      <div className="signature6-item align-item-center">
        <img src={props.icon} alt="icon" />
        <p>{props.text}</p>
      </div>
    </>
  );
};
