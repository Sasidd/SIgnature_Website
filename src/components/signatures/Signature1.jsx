import React from "react";
import { pic } from "../../assests";

// icons
import { GrLinkedinOption } from "react-icons/gr";
import { RiFacebookFill, RiYoutubeFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

const Signature1 = () => {
  return (
    <>
      <div className="signature1">
        <div className="signature1-container">
          <img src={pic} alt="profile" />
          <div className="signature1-container-content">
            <h3>Emmie Paterson</h3>
            <p>Sales & Marketing</p>
            <div className="signature1-container-content-items">
              <Signature1Item heading="Email" text="emmie@gmail.com" />
              <Signature1Item heading="Phone" text="+030 323 22 33" />
              <Signature1Item
                heading="Address"
                text="32 3rd Ave, New York, NY 10002, USA"
              />
              <Signature1Item heading="Website" text="www.expamle.com" />
              <Signature1Item heading="Email" text="emmie@gmail.com" />
            </div>
            <div className="signature1-container-content-icons">
              <Signature1Icon>
                <GrLinkedinOption />
              </Signature1Icon>
              <Signature1Icon>
                <RiFacebookFill />
              </Signature1Icon>
              <Signature1Icon>
                <RiYoutubeFill />
              </Signature1Icon>
              <Signature1Icon>
                <IoLogoInstagram />
              </Signature1Icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature1;

const Signature1Item = (props) => {
  return (
    <>
      <div className="signature1-item">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
};

const Signature1Icon = (props) => {
  return (
    <>
      <div className="signature1-icon">{props.children}</div>
    </>
  );
};
