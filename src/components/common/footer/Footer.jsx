import React from "react";
import { Link } from "react-router-dom";
import Container from "../../container/Container";
import "./Footer.scss";
import {
  facebook,
  youtube,
  twitter,
  linkedin,
  logo_wthie,
} from "../../../assests";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="main">
          <Container className="md">
            <div className="footer-container">
              <FooterItem title="Info">
                <Link to="/">Reviews</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Contact us</Link>
                <Link to="/">Pricing</Link>
              </FooterItem>
              <FooterItem title="Tools">
                <Link to="/">Email Signature examples</Link>
                <Link to="/">Gmail Signature</Link>
                <Link to="/">Outlook Signature</Link>
                <Link to="/">Apple mail Signature</Link>
              </FooterItem>

              <FooterItem title="Resources">
                <Link to="/">Templates</Link>
                <Link to="/">What is stampify?</Link>
              </FooterItem>
              <FooterItem title="Languages">
                <Link to="/">English</Link>
              </FooterItem>

              <FooterItem title="Social">
                <div className="footer-container-icons">
                  <img src={linkedin} alt="icon" />
                  <img src={youtube} alt="icon" />
                  <img src={facebook} alt="icon" />
                  <img src={twitter} alt="icon" />
                </div>
              </FooterItem>
            </div>
            <div className="footer-bottom">
              <img src={logo_wthie} alt="logo" />
              <p>&copy; 2023 Stampify. All rights reserved.</p>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Footer;

// sub
const FooterItem = (props) => {
  return (
    <>
      <div className="footeritem">
        <h5>{props.title}</h5>
        <div className="footeritem-container">{props.children}</div>
      </div>
    </>
  );
};
