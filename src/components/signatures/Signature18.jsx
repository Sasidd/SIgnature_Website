import React from "react";
import { menprofile } from "../../assests";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
const Signature18 = () => {
  return (
    <>
      <div className="signature18">
        <div className="signature18-container">
          <div className="signature18-container-image">
            <img src={menprofile} alt="profile" />
            <h2>Gregory Fridley</h2>
          </div>

          <div className="signature18-container-content">
            <p>Global Operations Executive | Comapny Name</p>
          </div>
          <div className="signature18-container-icons">
            <AiFillTwitterSquare />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature18;
