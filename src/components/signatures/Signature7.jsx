import React from "react";
import { signature7 } from "../../assests";
import { RiBehanceFill, RiInstagramLine } from "react-icons/ri";
import { SiUpwork } from "react-icons/si";
const Signature7 = () => {
  return (
    <>
      <div className="signature7">
        <div className="signature7-container">
          <div className="signature7-container-content">
            <div className="signature7-container-content-heading">
              <h3>Floyd Miles</h3>
            </div>
            <div className="signature7-container-content-data">
              <p>Motion Designer</p>
              <p>Floy.m@ds.com</p>
            </div>
            <div className="signature7-container-content-icons">
              <RiBehanceFill />
              <RiInstagramLine />
              <SiUpwork />
            </div>
          </div>
          <img src={signature7} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Signature7;
