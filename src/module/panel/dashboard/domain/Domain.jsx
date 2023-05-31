import React from "react";
import "./Domain.scss";
import { Heading } from "../../../../components";
import { Topbar } from "../../../../components/common";

import { IoMdArrowDropdown } from "react-icons/io";
const Domain = () => {
  return (
    <>
      <div className="domain">
        <div className="domain-container">
          <Topbar />
          <div className="mt-2" />
          <Heading className="secondry">Domain settings</Heading>

          <div className="domain-container-top">
            <h6>Domain</h6>

            <div className="domain-container-top-left space-between">
              <p>Add your domain</p>
              <div className="domain-container-top-right align-item-center">
                <p>www.xyz.eu</p>
                <button>edit</button>
              </div>
            </div>
          </div>
          <div className="domain-container-border" />
          <div className="domain-container-bottom">
            <div>
              <h6>Email service</h6>
              <p>Set the email service</p>
            </div>
            <button>
              Google workspace
              <IoMdArrowDropdown
                style={{ marginLeft: ".7rem", fontSize: "2rem" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
