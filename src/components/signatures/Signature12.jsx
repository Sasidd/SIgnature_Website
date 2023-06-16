import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { signature12 } from "../../assests";
const Signature12 = () => {
  return (
    <>
      <div className="signature12">
        <div className="signature12-container">
          <img src={signature12} alt="signature" />
          <div className="signature12-container-content">
            <h2>Paige Loewe</h2>
            <p>
              Sales and Marketing Specialist at <span>armyspy.com</span>
            </p>
            <div className="signature12-container-content-item">
              <Signature12Item title="Phone" content="+3 947 3135 8383" />
              <Signature12Item
                title="Email"
                content="MarjorieJHart@armyspy.com"
              />
              <Signature12Item title="Website" content="armyspy.com" />
              <Signature12Item
                title="Address"
                content="777 S. Wilshire Blvd, Suite 212"
              />
            </div>

            {/* new  */}
            <div className="signature12-container-content-icons align-item-center">
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

export default Signature12;

const Signature12Item = (props) => {
  return (
    <>
      <div className="signature12-item">
        <h4>{props.title} :</h4>
        <p>{props.content}</p>
      </div>
    </>
  );
};
