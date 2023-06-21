import React from "react";
import { Profile_pic5 } from "../../assests";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Signature9 = () => {
  return (
    <>
      <div className="signature9">
        <div className="signature9-container">
          <img src={Profile_pic5} alt="profile" />
          <div className="signature9-container-content">
            <h4 className="uppercase">Travel Bloger</h4>
            <h5>Antony Myers</h5>
            <div className="signature9-container-content-data">
              <Signature9Item heading="mobile" text="+1 222 543 6753" />
              <Signature9Item heading="email" text="antony@gmail.com" />
              <Signature9Item heading="website" text="mytravellife.io" />
            </div>
            <div className="signature9-container-content-icons">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature9;

const Signature9Item = (props) => {
  return (
    <>
      <div className="signature9-item">
        <h4> {props.heading} : </h4>
        <h4> {props.text} </h4>
      </div>
    </>
  );
};
