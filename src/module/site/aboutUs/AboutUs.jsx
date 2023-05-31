import React from "react";
import {
  AboutStampify,
  Banner,
  ChoosingStampify,
  Container,
  WorkSignature,
  Heading,
  Text,
} from "../../../components";

const AboutUs = () => {
  return (
    <>
      <Banner
        heading="Helping millions grow better."
        text="Build unique and eye-catching email signatures that
              streamline your brand.
              Save time with conversion
              -optimised email signature templates."
      />

      {/* Out Mission */}
      <div className="m-9">
        <Container className="main">
          <Container className="md">
            <Container className="extra-small">
              <Heading className="center primary">Our Mission</Heading>
              <div className="mt-2" />
              <Text className="center">
                There's this notion that to grow a business, you have to be
                ruthless. But we know there's a better way to grow. One where
                what's good for the bottom line is also good for customers. We
                believe businesses can grow with a conscience, and succeed with
                a soul — and that they can do it with inbound. That's why we've
                created an ecosystem uniting software, education, and community
                to help businesses grow better every day.
              </Text>
            </Container>
          </Container>
        </Container>
      </div>

      {/* About Stampify */}

      <AboutStampify />

      {/* Work Signature */}
      <Container className="main">
        <WorkSignature />
      </Container>

      {/* Choosing Stampify  */}

      <ChoosingStampify />
    </>
  );
};

export default AboutUs;
