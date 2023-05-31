import React from "react";
import "./Topbar.scss";
import { profile, search } from "../../../assests";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-container-search">
            <img src={search} alt="search-icon" />
            <input type="" placeholder="search" />
          </div>
          <div className="topbar-container-profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
