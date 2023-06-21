import React from "react";
import { Profile_pic1 } from "../../assests";
const Signature20 = () => {
  return (
    <>
      <div className="signature20">
        <div className="signature20-container">
          <div className="signature20-container-bottom">
            <div className="signature20-container-bottom-left">
              <p>Company Name</p>
              <p>www.Brand.org</p>
            </div>
            <div className="signature20-container-bottom-right">
              <p>000 000 0000</p>
              <p>777 S. Wilshire Blvd, Suite 212</p>
            </div>
          </div>
          <div className="signature20-container-top">
            <img src={Profile_pic1} alt="profile" />
            <div className="signature20-container-top-name">
              <h2>Jane Doe</h2>
              <p>Global Operations Executive</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature20;
