import React from "react";
import "./PricePage.scss";
import { FiCheck } from "react-icons/fi";
import { Container, Faq } from "../../../components";

const PricePage = () => {
  return (
    <>
      <div className="pricepage">
        <div className="pricepage-heading">
          <h4>Choose the best plan for you</h4>
          <h1>Offers 30 Days Trial </h1>
        </div>
        <div className="bg-blue">
          <Container className="main">
            <div className="pricepage-container">
              {/* first */}
              <div className="signatureplain-cards">
                <h3>Starter</h3>
                <div className="signatureplain-cards-top">
                  <h4>For personal use</h4>
                  <h5>Great to start for free with Stampify</h5>
                  <button>Get Started</button>
                </div>
                <div className="signatureplain-cards-bottom">
                  <Check>Create one free signature.</Check>
                  <Check>No customisation</Check>
                  <Check>Stampify branding</Check>
                </div>
              </div>
              {/* two */}
              <div className="signatureplain-cards">
                <h3>Professional</h3>
                <div className="signatureplain-cards-top">
                  <h4>For personal use</h4>
                  <h5>Packed with premium features for professionals</h5>
                  <button>Get Started</button>
                </div>
                <div className="signatureplain-cards-bottom">
                  <Check> Create three signatures</Check>
                  <Check>Up to 10 email premium templates</Check>
                  <Check> Full colour and size customisation</Check>
                  <Check> Access professional apps and integrations</Check>
                  <Check> Add disclaimers and banners.</Check>
                  <Check>Remove Stampify branding</Check>
                </div>
              </div>
              {/* first */}
              <div className="signatureplain-cards">
                <h3>Small Business</h3>
                <div className="signatureplain-cards-top">
                  <h4>For Small Bussiness</h4>
                  <h5>For 1 to 5 Users Great for small business team</h5>
                  <button>Get Started</button>
                </div>
                <div className="signatureplain-cards-bottom">
                  <Check> Everything in the Professional plan</Check>
                  <Check> Central portal to manage emails signatures</Check>
                  <Check>Invite and manage five employees' permissions</Check>
                  <Check>Connect GSuite and Office 365</Check>
                </div>
              </div>
              {/* first */}
              <div className="signatureplain-cards">
                <h3>Company</h3>
                <div className="signatureplain-cards-top">
                  <h4>For Company</h4>
                  <h5>Great for small business team 6-10 users</h5>
                  <button>Get Started</button>
                </div>
                <div className="signatureplain-cards-bottom">
                  <Check>Everything in the Small Business</Check>
                  <Check> Central portal to manage emails signatures</Check>
                  <Check>Invite and manage 6-10 employees' permissions</Check>
                  <Check>Connect GSuite and Office 365</Check>
                  <Check>VIP Customer service</Check>
                </div>
              </div>
              {/* first */}
              <div className="signatureplain-cards">
                <h3>Enterprise</h3>
                <div className="signatureplain-cards-top">
                  <h4>Enterprise</h4>
                  <h5>Great for small business team 11-200 User</h5>
                  <button>Get Started</button>
                </div>
                <div className="signatureplain-cards-bottom">
                  <Check>Everything in the Company plan</Check>
                  <Check>Central portal to manage emails signatures </Check>
                  <Check>
                    Invite and manage company employees' permissions
                  </Check>
                  <Check>Connect GSuite and Office 365</Check>
                  <Check>VIP Customer service</Check>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Faq />
      </div>
    </>
  );
};

export default PricePage;

const Check = (props) => {
  return (
    <>
      <div className="signatureplain-cards-bottom-item">
        <div className="signatureplain-cards-bottom-item-icon">
          <FiCheck />
        </div>
        <p> {props.children}</p>
      </div>
    </>
  );
};
