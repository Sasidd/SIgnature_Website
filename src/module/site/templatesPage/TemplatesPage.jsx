import React from "react";
import "./TemplatesPage.scss";
import {
  Signature6,
  Signature1,
  Signature2,
  Signature3,
  Signature4,
  Signature8,
  Signature7,
  Signature9,
  Signature10,
  Signature11,
  Signature12,
  Signature13,
  Signature14,
  Signature15,
  Signature16,
  Signature17,
  Signature18,
  Signature19,
  Signature20,
  Signature21,
} from "../../../components/signatures";
import { Container } from "../../../components";
const Templates = () => {
  return (
    <>
      <div className="templates">
        <div className="bg-blue">
          <Container className="main">
            <div className="signaturecards">
              <div className="signaturecards-container">
                <div className="signaturecards-container-left">
                  <Signature1 />
                  <Signature2 />
                  <Signature3 />
                  <Signature4 />
                  <Signature6 />
                  <Signature7 />
                </div>
                <div className="signaturecards-container-middle">
                  <Signature8 />
                  <Signature9 />
                  <Signature10 />
                  <Signature11 />
                  <Signature12 />
                  <Signature13 />
                  <Signature14 />
                </div>
                <div className="signaturecards-container-right">
                  <Signature15 />
                  <Signature16 />
                  <Signature17 />
                  <Signature18 />
                  <Signature19 />
                  <Signature20 />
                  <Signature21 />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Templates;
