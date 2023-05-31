import React from "react";
import "./SettingsLayout.scss";
import { Outlet } from "react-router-dom";
import { HomeMenu, Sidebar } from "../../components/common";
import { homeMenu, sidebarRoutes } from "../../data/routesData";
const SettingsLayout = () => {
  return (
    <>
      <div className="settingslayout">
        <div className="settingslayout-container">
          <div className="settingslayout-container-sidemenu">
            <Sidebar routes={sidebarRoutes} />
          </div>
          <div className="settingslayout-container-sideoption">
            <HomeMenu menu={homeMenu} />
          </div>
          <div className="settingslayout-container-outlet">
            <div className="settingslayout-container-outlet-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
