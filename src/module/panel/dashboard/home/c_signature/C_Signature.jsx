import React from "react";
import { Heading, ScreenView } from "../../../../../components";
import { Topbar } from "../../../../../components/common";
import { Signature6 } from "../../../../../components/signatures";

const C_Signature = () => {
  return (
    <>
      <Topbar />
      <div className="mt-4">
        <Heading className="secondry">Company signature</Heading>
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
      </div>
    </>
  );
};

export default C_Signature;
