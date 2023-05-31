import React from "react";
import "./WorkSignature.scss";
import { companyemail, emailsignature } from "../../assests";

import Heading from "../heading/Heading";
import Text from "../text/Text";
import Container from "../container/Container";
import Button from "../button/Button";

const WorkSignature = () => {
  return (
    <>
      <Container className="md">
        <div className="m-6">
          <div className="pt-2" />
          <Heading className="primary center">
            Build A Personal & Company Email Signature
          </Heading>
          <Item
            heading="Personal Email Signature"
            para1="Are you a solopreneur or sole-trader looking to elevate the
            professionalism of your small business? Creating a personalised
            and branded email signature is sure to catch the eye of prospects
            and customers."
            para2="In just a few minutes, and with zero design or coding experience, your new email signature will be live and ready to send "
            image={emailsignature}
          />
          <Item
            heading="Company Email Signature"
            para1="Create and manage company-wide email signatures in an instant. Thanks to simple integration and behind the scenes coding, Stampify enables small to medium sized businesses to make email signature management easy."
            para2="In just a few minutes, and with zero design or coding experience, your new email signature will be live and ready to send."
            image={companyemail}
          />
        </div>
      </Container>
    </>
  );
};

export default WorkSignature;

const Item = (props) => {
  return (
    <>
      <div className="worksignature m-2">
        <div className="worksignature-container">
          <div className="worksignature-container-content">
            <h2>{props.heading}</h2>
            <div className="pt-1" />
            <Text>{props.para1}</Text>
            <div className="pt-3" />
            <Text>{props.para2}</Text>
            <div className="mt-6" />
            <Button className="mt-2 btn-primary">Create Signature</Button>
          </div>
          <div className="worksignature-container-image">
            <img src={props.image} alt="signature" />
          </div>
        </div>
      </div>
    </>
  );
};
