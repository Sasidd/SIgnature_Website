import React from "react";
import "./AboutStampify.scss";
import Container from "../container/Container";
import Heading from "../heading/Heading";
import Text from "../text/Text";
import { about1, about2, about3 } from "../../assests";
const AboutStampify = () => {
  return (
    <>
      <div className="aboutstampify">
        <Container className="main">
          <Container className="half">
            <Heading className="primary center">About Stampify</Heading>
            <Text className="center m-3">
              We set out on a mission to create the best email signature
              software. Not just with the most impressive features, but
              supported by a dedicated service team that’s passionate about the
              success of our users. At that moment, Stampify was born.
            </Text>
          </Container>
        </Container>

        <AboutItem
          className="bg-blue "
          heading="Passionate About Supporting The Little Guy"
          para1="Just like you, we’re entrepreneurs. We know the struggles of building a company from
          scratch. With that in mind, we committed ourselves to creating a platform accessible to
          sole traders and small to medium sized businesses, giving them features and functionality
          usually reserved for incredibly expensive enterprise systems.
          "
          para2="You might be the little guy now, but we’re dedicated to helping you outmuscle the
          goliaths of your industry"
          image={about1}
        />

        <AboutItem
          className="m-4"
          heading="No Company Left Behind"
          para1="We get it, technology isn’t everyone’s jam. Setting up an email signature can be a tiresome
          task. With Stampify, we pride ourselves on the fact that anyone can use our system. And,
          in the  unlikely event you can’t create the email signature of your dreams, our team of
          experts will be on-hand to get it over the line"
          image={about2}
          imgtype="aboutitem-second"
        />

        <AboutItem
          className="bg-blue"
          heading="Place Your Trust In Us"
          para1="As an Australian-based company, we take great pride in being the chosen email signature
          software provider of companies across the region and beyond. Everything we do is to make
          the lives of our users easier and to help their businesses perform better. 
          "
          para2="From our incredibly affordable platform to our incredibly secure database, you can trust us
          to serve you while protecting your sensitive data"
          image={about3}
        />
      </div>
    </>
  );
};

export default AboutStampify;

// Sub Components

const AboutItem = (props) => {
  return (
    <>
      <div className={`aboutitem ${props.className}`}>
        <Container className="main">
          <Container className="md">
            <div className="aboutitem-container">
              <div className="aboutitem-container-content">
                <Heading className="primary-light">{props.heading}</Heading>
                <Text className="mt-1">{props.para1}</Text>
                <Text className="mt-4">{props.para2}</Text>
              </div>
              <div className={`aboutitem-container-image ${props.imgtype}`}>
                <img src={props.image} alt="about" />
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
};
