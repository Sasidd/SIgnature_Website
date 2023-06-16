import React from "react";
import { menprofile } from "../../assests";
import { AiFillTwitterSquare } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
const Signature13 = () => {
  return (
    <>
      <div className="signature13">
        <div className="signature13-container">
          <div className="signature13-container-image">
            <img src={menprofile} alt="profile " />
          </div>
          <div className="signature13-container-name">
            <h3>Alex Rust</h3>
            <p>Digital Product Designer</p>
            <p>Pnyring</p>
          </div>
          <div className="signature13-container-content">
            <p>000 000 0000</p>
            <p>Company Name</p>
            <p>www.website.com</p>
            <div className="signature13-container-content-icons">
              <AiFillTwitterSquare />
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature13;
