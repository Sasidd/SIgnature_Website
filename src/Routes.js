import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LoginLayout,
  SettingsLayout,
  UserSiteLayout,
  PanelLayout,
  PanelEditLayout,
} from "./layout";
import { SignIn, SignUp } from "./module/panel";

// Site Pages
import {
  AboutUs,
  ContactUs,
  CreateSignature,
  HomePage,
  PricePage,
  PrivacyPolicy,
  TemplatesPage,
} from "./module/site";

import {
  Analytics,
  CompanyDetail,
  Domain,
  PersonalDetail,
} from "./module/panel/dashboard";
import {
  C_Signature,
  EditProfile,
  ManageUsers,
  PlainandBilling,
  P_Signature,
  Security,
  Support,
} from "./module/panel/dashboard/home";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* user Site layouts */}
          <Route path="" element={<UserSiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/create-signature" element={<CreateSignature />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/pricepage" element={<PricePage />} />
          </Route>
          {/* Login pages Layout */}
          <Route path="" element={<LoginLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Settings Layout */}

          <Route path="" element={<SettingsLayout />}>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/home/edit_profile" element={<EditProfile />} />
            <Route path="/home/manage_users" element={<ManageUsers />} />
            <Route path="/home/plan" element={<PlainandBilling />} />
            <Route path="/home/personal_signature" element={<P_Signature />} />
            <Route path="/home/company_signature" element={<C_Signature />} />
            <Route path="/home/support" element={<Support />} />
            <Route path="/home/security" element={<Security />} />
          </Route>

          {/* Side Panel Layout */}
          <Route path="" element={<PanelLayout />}>
            <Route path="/domain" element={<Domain />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
          <Route path="" element={<PanelEditLayout />}>
            <Route path="/peronal_detail" element={<PersonalDetail />} />
            <Route path="/company_detail" element={<CompanyDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default Routess;
