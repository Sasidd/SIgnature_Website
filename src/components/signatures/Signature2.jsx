import React from "react";
import { signature2 } from "../../assests";

// icons

import { FaFacebook, FaTwitter, FaLinkedinIn, FaLink } from "react-icons/fa";

const Signature2 = () => {
  return (
    <>
      <div className="signature2">
        <div className="signature2-container">
          <img src={signature2} alt="" />
          <div className="signature2-container-content">
            <h2>Paige Loewe</h2>
            <p>
              Sales and Marketing Specialist at <span>armyspy.com</span>
            </p>
            <div className="signature2-container-content-item">
              <Signature2Item title="Phone" content="+3 947 3135 8383" />
              <Signature2Item
                title="Email"
                content="MarjorieJHart@armyspy.com"
              />
              <Signature2Item title="Website" content="armyspy.com" />
              <Signature2Item
                title="Address"
                content="777 S. Wilshire Blvd, Suite 212"
              />
            </div>

            {/* new  */}
            <div lassName="signature2-container-content-icons align-item-center">
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

export default Signature2;

const Signature2Item = (props) => {
  return (
    <>
      <div className="signature2-item">
        <h4>{props.title} :</h4>
        <p>{props.content}</p>
      </div>
    </>
  );
};
