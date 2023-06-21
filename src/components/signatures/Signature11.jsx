import React from "react";
import { Profile_pic7 } from "../../assests";

import { BsMusicNoteBeamed, BsSpotify, BsYoutube } from "react-icons/bs";

const Signature11 = () => {
  return (
    <>
      <div className="signature11">
        <div className="signature11-container">
          <div className="signature11-container-image">
            <img src={Profile_pic7} alt="profile" />
          </div>
          <div className="signature11-container-content">
            <h3>kynan burns</h3>
            <h3>sound producer</h3>
            <div className="signature11-container-content-data">
              <p>mobile: 404-5566-154</p>
              <p>email: jeremy@mysignature.io</p>
            </div>
          </div>
          <div className="signature11-container-icons">
            <div>
              <BsMusicNoteBeamed />
            </div>
            <div>
              <BsSpotify />
            </div>
            <div>
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature11;
