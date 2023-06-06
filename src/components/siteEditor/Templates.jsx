import React from "react";
import Heading from "../heading/Heading";
import Skeleton1 from "../skeleton/Skeleton1";
import Skeleton2 from "../skeleton/Skeleton2";
const Templates = () => {
  return (
    <>
      <Heading className="editor">Added social icons</Heading>

      <div>
        <Skeleton1 />
        {/* <Temp1 /> */}
        <Skeleton2 />
      </div>
    </>
  );
};

export default Templates;
