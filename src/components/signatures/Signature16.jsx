import React from "react";
import { menprofile } from "../../assests";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Signature16 = () => {
  return (
    <>
      <div className="signature16">
        <div className="signature16-container">
          <img src={menprofile} alt="profile" />

          <div className="signature16-container-content">
            <h2>Gregory Fridley</h2>
            <p>Global Operations Executive | Comapny Name</p>
          </div>
          <div className="signature16-container-icons">
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

export default Signature16;
