import { useState } from "react";
import "./SiteEditor.scss";

import Slider from "react-slick";

// icons
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbTemplate, TbApps } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";

// tabs
import React from "react";
import General from "./General";
import Design from "./Design";
import Templates from "./Templates";
import Social from "./Social";
import Apps from "./Apps";


const SiteEditor = () => {
  const [tab, setTab] = useState();

  const TabContent = () => {
    if (tab === "general") {
      return (
        <>
          <General />
        </>
      );
    } else if (tab === "design") {
      return (
        <>
          <Design />
        </>
      );
    } else if (tab === "templates") {
      return (
        <>
          <Templates />
        </>
      );
    } else if (tab === "social") {
      return (
        <>
          <Social />
        </>
      );
    } else if (tab === "apps") {
      return (
        <>
          <Apps />
        </>
      );
    } else {
      return (
        <>
          {/* <Design /> */}
          {/* <Social /> */}
          <General />
        </>
      );
    }
  };

  return (
    <>
      <div className="siteditor">
        <div className="siteditor-header">
          {/* <Slider {...settings}></Slider> */}
          <TabBtn icon={<BiMenuAltLeft />} onClick={() => setTab("general")}>
            General
          </TabBtn>
          <TabBtn
            icon={<AiOutlineAntDesign />}
            onClick={() => setTab("design")}
          >
            Design
          </TabBtn>
          <TabBtn icon={<TbTemplate />} onClick={() => setTab("templates")}>
            Template
          </TabBtn>
          <TabBtn
            icon={<IoShareSocialSharp />}
            onClick={() => setTab("social")}
          >
            Social
          </TabBtn>
          <TabBtn icon={<TbApps />} onClick={() => setTab("apps")}>
            Apps
          </TabBtn>
        </div>
        <div className="siteditor-content">
          {/* <General /> */}
          <Design />
          {/* <TabContent /> */}
          {/* <Social /> */}
          {/* <Templates /> */}
        </div>
      </div>
    </>
  );
};

export default SiteEditor;

// Sub components

const TabBtn = (props) => {
  return (
    <>
      <div className="tabbtn">
        <button onClick={props.onClick}>
          {props.icon}
          {props.children}
        </button>
      </div>
    </>
  );
};
