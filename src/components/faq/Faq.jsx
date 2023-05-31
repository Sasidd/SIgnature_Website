import React, { useState } from "react";
import "./Faq.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import Grid from "../grid/Grid";
import Heading from "../heading/Heading";
import Container from "../container/Container";
const Faq = () => {
  return (
    <>
      <Container className="main">
        <div className="m-4">
          <Heading className="center primary">
            Frequently Asked Questions
          </Heading>
          <div className="m-2">
            <Container className="md">
              <Container className="lg">
                <Grid className="grid-2">
                  <div>
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                  </div>
                  <div>
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                    <Accordion
                      question="Who Is Stampify For?"
                      answer="Editing and updating email signatures takes time. And, time means
money. With Stampify you can implement changes instantly without
any messing around, allowing you and your team to get on with what
you do best. 
Additionally, professional email signatures are proven to boost
engagement, replies, and leads!"
                    />
                  </div>
                </Grid>
              </Container>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Faq;

const Accordion = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="accordion m-2">
        <div className="accordion-container">
          <div className="accordion-container-top">
            <h6>{props.question}</h6>
            <TiArrowSortedDown />
          </div>
          <div className="accordion-container-bottom">
            {/* <p>{props.answer}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};
