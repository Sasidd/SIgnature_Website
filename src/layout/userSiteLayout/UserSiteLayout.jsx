import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components/common";

const UserSiteLayout = () => {
  return (
    <>
      <div className="usersitelayout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default UserSiteLayout;
