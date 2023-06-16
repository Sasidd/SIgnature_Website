import React from "react";
import { menprofile } from "../../assests";
import { AiFillTwitterSquare } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
const Signature15 = () => {
  return (
    <>
      <div className="signature15">
        <div className="signature15-container">
          <div className="signature15-container-image">
            <img src={menprofile} alt="profile " />
          </div>
          <div className="signature15-container-name">
            <h3>Peter Grecko</h3>
            <p>Digital Product Designer</p>
            <p>Pnyring</p>
          </div>
          <div className="signature15-container-content">
            <div className="signature15-container-content-icons">
              <AiFillTwitterSquare />
              <IoLogoYoutube />
            </div>
            <p>000 000 0000</p>
            <p>Company Name</p>
            <p>www.website.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature15;
