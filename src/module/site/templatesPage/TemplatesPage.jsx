import React from "react";
import {
  Signature6,
  Signature1,
  Signature2,
} from "../../../components/signatures";

const Templates = () => {
  return (
    <>
      <div className="templates">
        <div className="bg-blue">
          <Signature6 />
          <br />
          <Signature1 />
          <br />
          <Signature2 />
        </div>
      </div>
    </>
  );
};

export default Templates;
