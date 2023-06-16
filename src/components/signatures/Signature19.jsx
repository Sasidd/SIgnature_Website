import React from "react";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { menprofile } from "../../assests";
const Signature19 = () => {
  return (
    <>
      <div className="signature19">
        <div className="signature19-container">
          <div className="signature19-container-name">
            <h3>James Doe</h3>
            <p>Digital Product Designer</p>
            <p>Company name</p>
          </div>
          <div className="signature19-container-content">
            <p>@Jamesdoe</p>
            <p>000. 000. 0000</p>
            <p> Jamesdoe@website.com</p>
            <div className="signature19-container-content-icons">
              <AiFillTwitterSquare />
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillYoutube />
            </div>
          </div>
          <div className="signature19-container-image">
            <img src={menprofile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature19;
