import React from "react";
import { Sidebar } from "../../components/common";
import { Outlet } from "react-router-dom";
import { sidebarRoutes } from "../../data/routesData";
const PanelEditLayout = () => {
  return (
    <>
      <div className="settingslayout">
        <div className="settingslayout-container">
          <div className="settingslayout-container-sidemenu">
            <Sidebar routes={sidebarRoutes} />
          </div>
          <div className="settingslayout-container-sideoption">

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

export default PanelEditLayout;
