import React from "react";
import "./HomePage.scss";
import {
  Container,
  Banner,
  Heading,
  WorkSeam,
  Grid,
  Text,
  WorkSignature,
  ChoosingStampify,
  Faq,
  AboutStampify,
} from "../../../components";
import Button from "../../../components/button/Button";
import {
  solution,
  autoclient,
  controle,
  global,
  style,
} from "../../../assests";

const HomePage = () => {
  return (
    <>
      <div className="wave-background">
        {/* Main Banner Section */}
        <Banner
          heading="Email Signature Management Made Easy"
          text="Build unique and eye-catching email signatures that streamline
                  your brand. Save time with conversion -optimised email
                  signature templates."
        />
      </div>

      <Container className="main">
        <Container className="md">
          {/* Work Seam Section */}
          <div className="workseam-section ">
            <Heading className="center primary">Works Seamlessly With</Heading>
            <WorkSeam />
          </div>
          <div className="pt-3" />
          <Button className="btn-primary m-3 center ">Try Stampify</Button>
          {/* Signature Solution Section */}
          <Heading className="center primary">
            Email Signature Solutions Without The Hassle
          </Heading>
          <div className="m-3">
            <div className="solutionsection">
              <div className="solutionsection-container">
                <div className="solutionsection-container-content">
                  <Grid className="grid-2">
                    <SolutionCard
                      icon={controle}
                      heading="Complete Control"
                      para1="You’re in the driving seat. Either build your own email signature from scratch or use one of our predefined, yet customisable templates."
                      para2=" Text, font, images, colour, branding – you choose it all."
                    />
                    <SolutionCard
                      icon={global}
                      heading="Instant Global Changes"
                      para1="Managing your company email signature has never been so easy."
                      para2="Revamp the design of everyone’s signature in just one click, unifying your brand image in an instant."
                    />

                    <SolutionCard
                      className="mt-3"
                      icon={autoclient}
                      heading="Auto Client Sync"
                      para1="Wave manual changes."
                      para2=" Use our simple API integration's to automatically upload any email signature changes into your chosen email client"
                    />
                    <SolutionCard
                      className="mt-3"
                      icon={style}
                      heading="Styles That Catch The Eye"
                      para1="Make your email signature a money generating machine."
                      para2=" Add buttons, CTAs, links, banners, videos, and much more."
                    />
                  </Grid>
                </div>
                <div className="solutionsection-container-img">
                  <img src={solution} alt="solution" />
                </div>
              </div>
            </div>
          </div>

          {/* Signature Template  */}

          <div className="pt-5">
            <div className="m-6">
              <Container className="md">
                <Heading className="primary center ">
                  Over
                  <span> 10+ </span>
                  Email Signature Templates
                </Heading>
                <Text className="center m-2">
                  You’re guaranteed to find the perfect email signature for your
                  business, no matter your industry, profession, or job title.
                  Choose from many of email signatures that have been designed
                  and tested by our email marketing experts
                </Text>
              </Container>
            </div>
          </div>
          {/* signature solution Status */}

          <div className="m-5">
            <Heading className="primary center">
              Why You Need Professional Email Signature Solutions
            </Heading>
            <div className="m-6">
              <Grid className="grid-4">
                <StatusItem
                  heading="50%"
                  content="50% of all B2B leads come from email marketing. "
                />
                <StatusItem
                  heading="174%"
                  content="Email marketing receives
                174% more engagement
                than social media "
                />
                <StatusItem
                  heading="66%"
                  content="66% of decision makers
                use email as their
                primary correspondence "
                />
                <StatusItem
                  heading="15%"
                  content="People with professional
                email signatures generate
                15% more leads"
                />
              </Grid>
            </div>
            <div className="pt-1" />
            <Button className="center btn-primary">
              Create An Email Signature
            </Button>
          </div>
        </Container>

        {/* Work Signature  */}
        <Container className="lg">
          <WorkSignature />
        </Container>
      </Container>
      {/* Choosing Stampify */}
      <ChoosingStampify />

      <div className="m-6 pt-5">
        <Container className="main">
          <Container className="md">
            <Container className="lg">
              <Heading className="primary center">
                Give Your Business A Professional Look & Streamline Your Brand
                Today
              </Heading>
              <Button className="btn-primary center mt-3">
                Sign Up To Stampify
              </Button>
            </Container>
          </Container>
        </Container>
      </div>

      {/* Faq Section */}

      <Faq />

      {/* About Stampify */}

      <AboutStampify />

      {/*  Bottom */}

      <div className="mt-6">
        <Button className="center btn-primary">
          Get Started with Stampify
        </Button>
      </div>

      {/* Top priorities */}
      <Container className="main">
        <div className="top-priorities mb-6">
          <Heading className="primary center">
            Our top priorities are protecting your privacy and your data
          </Heading>
          <div className=" top-priorities-text">
            <Text className="center mt-5">
              We base our work on your patronage and confidence. We've created a
              platform that offers a thorough architecture to safeguard any
              data, including your team's and your own
            </Text>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;

// Sub components
////////////////
////// Solution Card

const SolutionCard = (props) => {
  return (
    <>
      <div className={`${props.className}`}>
        <div className="solution">
          <div className="solution-card">
            <img src={props.icon} alt="icon" />
            <h4>{props.heading}</h4>
            <p>{props.para1}</p>

            <p>{props.para2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const StatusItem = (props) => {
  return (
    <>
      <div className="statusitem">
        <div className="statusitem-container">
          <h1>{props.heading}</h1>
          <Text>{props.content}</Text>
        </div>
      </div>
    </>
  );
};
