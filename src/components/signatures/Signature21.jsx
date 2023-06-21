import React from "react";
import { Profile_pic5 } from "../../assests";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
const Signature21 = () => {
  return (
    <>
      <div className="signature21">
        <div className="signature21-container">
          <div className="signature21-container-name">
            <h3>James Doe</h3>
            <p>Digital Product Designer</p>
            <p>Company name</p>
          </div>
          <div className="signature21-container-content">
            <p>@Jamesdoe</p>
            <p>000. 000. 0000</p>
            <p> Jamesdoe@website.com</p>
            <div className="signature21-container-content-icons">
              <AiFillTwitterSquare />
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillYoutube />
            </div>
          </div>
          <div className="signature21-container-image">
            <img src={Profile_pic5} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature21;
