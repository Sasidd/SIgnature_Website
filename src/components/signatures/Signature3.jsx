import React from "react";
import { Profile_pic2 } from "../../assests";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaLink } from "react-icons/fa";

const Signature3 = () => {
  return (
    <>
      <div className="signature3">
        <div className="signature3-container">
          <div className="signature3-container-image">
            <img src={Profile_pic2} alt="" />
          </div>
          <div className="signature3-container-icons">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
          <div className="signature3-container-content">
            <h4>Karen Shevans</h4>
            <h5>Photographer {/* | company name are here  */}</h5>
            <div className="signature3-container-content-date">
              <p>13 545 654 435</p>
              <p>karen@example.com</p>
              <p>photospace.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature3;


