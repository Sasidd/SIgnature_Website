import React from "react";
import "./Security.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Heading, FormInput, Button } from "../../../../../components";
const Security = () => {
  const passwordvalidation = Yup.object({
    current_password: Yup.string().required("Please enter old password."),
    new_password: Yup.string()
      .required("Please enter new password.")
      .notOneOf(
        [Yup.ref("current_password")],
        "Your are entering previous password"
      )
      .min(8, "Your password is too short."),
    retypePassword: Yup.string()
      .required("Please retype your new password.")
      .oneOf([Yup.ref("new_password")], "Your passwords do not match."),
  });

  return (
    <>
      <div className="changepassword">
        <div className="changepassword-container">
          <Heading className="center primary">Change Password</Heading>
          <p className="center mt-1">
            Your Password has Expired, Please choose a New Password
          </p>
          <div className="changepassword-container-form">
            <Formik
              initialValues={{
                current_password: "",
                new_password: "",
                retypePassword: "",
              }}
              validateOnMount
              validationSchema={passwordvalidation}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <Form>
                  <FormInput
                    label="Old Password"
                    name="current_password"
                    type="password"
                  />
                  <FormInput
                    label="New Password"
                    name="new_password"
                    type="password"
                  />
                  <FormInput
                    label="Confirm New Password"
                    name="retypePassword"
                    type="password"
                  />
                  {/* <div className="save-btn">
                    <Button
                      disabled={!formik.isValid}
                      className="btn-lighter rounded center m-2"
                    >
                      Save
                    </Button>
                  </div> */}
                  <Button className="btn-login rounded center mt-2 ">
                    Reset Password
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
