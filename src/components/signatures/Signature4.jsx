import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { pic } from "../../assests";

const Signature4 = () => {
  return (
    <>
      <div className="signature4">
        <div className="signature4-container">
          <div className="signature4-container-image">
            <img src={pic} alt="profile" />
          </div>
          <div className="signature4-container-content">
            <div className="signature4-container-content-heading">
              <h3>Oscar Villarreal</h3>
            </div>
            <h4>SALES Manger | IT Case</h4>
            <div className="signature4-container-content-items">
              <p>mobile : +3 432 543 763</p>
              <p>mail: : example@gmail.com</p>
            </div>
            <div className="signature4-container-content-items">
              <p>address : pakistan </p>
              <p>website : www.example.com</p>
            </div>
            <div className="signature4-container-content-icons">
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

export default Signature4;
