import React from "react";

import { RiBehanceFill, RiInstagramLine } from "react-icons/ri";
import { SiUpwork } from "react-icons/si";
import { signature14 } from "../../assests";

const Signature14 = () => {
  return (
    <>
      <div className="signature14">
        <div className="signature14-container">
          <div className="signature14-container-image">
            <img src={signature14} alt="profile" />
          </div>
          <div className="signature14-container-content">
            <h1>Paige Loewe</h1>
            <p>Motion Designer</p>
            <p>Floy.m@ds.com</p>
            <div className="signature14-container-content-icons">
              <RiBehanceFill />
              <RiInstagramLine />
              <SiUpwork />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature14;
