import React from "react";

import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Profile_pic4 } from "../../assests";

const Signature8 = () => {
  return (
    <>
      <div className="signature8">
        <div className="signature8-container">
          <img src={Profile_pic4} alt="signature" />
          <div className="signature8-container-content">
            <h2>Paige Loewe</h2>
            <p>
              Sales and Marketing Specialist at <span>armyspy.com</span>
            </p>
            <div className="signature8-container-content-item">
              <Signature8Item title="Phone" content="+3 947 3135 8383" />
              <Signature8Item
                title="Email"
                content="MarjorieJHart@armyspy.com"
              />
              <Signature8Item title="Website" content="armyspy.com" />
              <Signature8Item
                title="Address"
                content="777 S. Wilshire Blvd, Suite 212"
              />
            </div>

            {/* new  */}
            <div className="signature8-container-content-icons align-item-center">
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

export default Signature8;

const Signature8Item = (props) => {
  return (
    <>
      <div className="signature2-item">
        <h4>{props.title} :</h4>
        <p>{props.content}</p>
      </div>
    </>
  );
};
