import React from "react";
import "./P_Signature.scss";
import { Heading, ScreenView } from "../../../../../components";
import { Topbar } from "../../../../../components/common";
import { Signature6 } from "../../../../../components/signatures";

const P_Signature = () => {
  return (
    <>
      <Topbar />
      <div className="mt-4">
        <Heading className="secondry">Personal signature</Heading>
        <div className="mt-1" />
        <ScreenView>
          <div className="upper-personal-signature ">
            <p>
              ’’Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s’’
            </p>
            <div className="bottom-personal-signature-btn">
              <button>Publish</button>
              <button>Drafts</button>
            </div>
          </div>

          <Signature6 />
          <div className="upper-personal-signature-eidt ">
            <hr />
            <button>Edit</button>
          </div>
        </ScreenView>
        <div className="mt-3" />
        <ScreenView>
          <div className="bottom-personal-signature">
            <div className="bottom-personal-signature-content">
              <p>Hey Jacob,</p>
              <p className="mt-2">
                Love the detailed documentation and user-flow screens. Will get
                to creating some low-fidelity wireframes first thing tomorrow
                morning
              </p>
              <p className="mt-2">
                Let me know if you need to discuss anything prior.
              </p>
              <p className="mt-2">Cheers!</p>
            </div>
            <div className="bottom-personal-signature-btn">
              <button>Publish</button>
              <button>Drafts</button>
            </div>
          </div>
          <div className="upper-personal-signature-eidt mt-6 ">
            <hr />
            <button>Edit</button>
          </div>
        </ScreenView>
      </div>
      <div className="mt-5" />
    </>
  );
};

export default P_Signature;
