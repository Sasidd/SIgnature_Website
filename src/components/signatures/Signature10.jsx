import React from "react";
import { Profile_pic6 } from "../../assests";

import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Signature10 = () => {
  return (
    <>
      <div className="signature10">
        <div className="signature10-container">
          <div className="signature10-container-image">
            <img src={Profile_pic6} alt="profile" />
          </div>
          <div className="signature10-container-content">
            <div className="signature10-container-content-heading">
              <h3>Andriana Jacobs</h3>
            </div>
            <h4>hr manager | capital</h4>
            <div className="signature10-container-content-data">
              <p>mobile: +1757 3145 2220 </p>
              <p>email: andriana@mysignature.io</p>
            </div>
            <div className="signature10-container-content-icons">
              <GrFacebook />
              <FaTwitterSquare />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature10;
