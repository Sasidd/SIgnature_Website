import React from "react";
import "./ChoosingStampify.scss";
import Grid from "../grid/Grid";
import Heading from "../heading/Heading";
import Text from "../text/Text";
import Button from "../button/Button";
import { correct_signature, wrong_signature } from "../../assests";
import Container from "../container/Container";
const ChoosingStampify = () => {
  return (
    <>
      <div className="m-5">
        <Container className="main">
          <Heading className="primary center">
            Choosing Stampify Makes Sense
          </Heading>
          <div className="mt-6 stampify-item-container">
            <Container className="md">
              <Grid className="grid-4">
                <Item
                  heading="Professional Designs"
                  para="Eye-catching and business
                    focussed designs created
                    by email experts"
                />
                <Item
                  heading="For Everyone"
                  para="No matter your level of
              technical ability, you’ll be
              able to easily use Stampify"
                />
                <Item
                  heading="Affordable Price"
                  para="Why waste money on
              expensive solutions when 
              Stampify does it all too?"
                />
                <Item
                  heading="Customer Service"
                  para="On-hand, rapid response
              customer support to answer
              your questions"
                />
              </Grid>
            </Container>
          </div>
        </Container>
        <div className="choosingstampify">
          <div className="choosingstampify-container">
            <Container className="main">
              <div className="choosingstampify-container-images">
                <img src={correct_signature} alt="correct" />
                <img src={wrong_signature} alt="correct" />
              </div>
              <div className="pt-6" />
              <div className="choosingstampify-container-button m-1">
                <Button className="btn-primary center">About Stampify</Button>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosingStampify;

const Item = (props) => {
  return (
    <>
      <div className="choosingstampify-card">
        <div className="choosingstampify-card-container">
          <h3>{props.heading}</h3>
          <div className="mt-4" />
          <Text>{props.para}</Text>
        </div>
      </div>
    </>
  );
};
