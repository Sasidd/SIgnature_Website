import React from "react";
import "./PanelLayout.scss";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/common";
import { sidebarRoutes } from "../../data/routesData";
const PanelLayout = () => {
  return (
    <>
      <div className="panellayout">
        <div className="panellayout-container">
          <div className="panellayout-container-sidemenu">
            <Sidebar routes={sidebarRoutes} />
          </div>
          <div className="panellayout-container-outlet">
            <div className="panellayout-container-outlet-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelLayout;
