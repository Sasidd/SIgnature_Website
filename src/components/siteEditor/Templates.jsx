import React from "react";
import Heading from "../heading/Heading";
import Skeleton1 from "../skeleton/Skeleton1";
import Temp1 from "./Temp1";
const Templates = () => {
  return (
    <>
      <Heading className="editor">Added social icons</Heading>

      <div>
        <Skeleton1 />
        <Temp1/>
      </div>
    </>
  );
};

export default Templates;
