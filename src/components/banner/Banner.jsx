import React from "react";
import "./Banner.scss";
import { banner } from "../../assests";
import Heading from "../heading/Heading";
import Text from "../text/Text";
import Container from "../container/Container";
import Button from "../button/Button";

const Banner = (props) => {
  return (
    <>
      <Container className="main">
        <div className="banner">
          <div className="banner-container">
            <div className="banner-container-content">
              <Heading className="primary">{props.heading}</Heading>
              <div className="m-3">
                <Text>{props.text}</Text>
              </div>
              <Button className="btn-primary">
                Generate My Email Signature
              </Button>
            </div>
            <div className="banner-container-img">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
        {/* <Container className="md"></Container> */}
      </Container>
    </>
  );
};

export default Banner;
