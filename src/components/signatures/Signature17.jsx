import React from "react";
import { Profile_pic9 } from "../../assests";

const Signature17 = () => {
  return (
    <>
      <div className="signature17">
        <div className="signature17-container">
          <div className="signature17-container-top">
            <img src={Profile_pic9} alt="profile" />
            <div className="signature17-container-top-name">
              <h2>Jane Doe</h2>
              <p>Global Operations Executive</p>
            </div>
          </div>
          <div className="signature17-container-bottom">
            <div className="signature17-container-bottom-left">
              <p>Company Name</p>
              <p>www.Brand.org</p>
            </div>
            <div className="signature17-container-bottom-right">
              <p>000 000 0000</p>
              <p>777 S. Wilshire Blvd, Suite 212</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature17;
