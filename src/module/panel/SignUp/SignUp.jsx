import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Heading, FormInput, Button } from "../../../components";
import { google } from "../../../assests";

const SignUp = () => {
  const validation = Yup.object({
    name: Yup.string()
      .min(2, "Must be 2 character")
      .max(25, "Must be 25 characters or less")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    new_password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be minimum 8 characters long"),
    retypePassword: Yup.string()
      .required("Please retype your password.")
      .oneOf([Yup.ref("new_password")], "Your passwords do not match."),
  });

  return (
    <>
      <div className="signup">
        <Heading className="secondry center">Sign up</Heading>
        <br />
        <br />

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            new_password: "",
            retypePassword: "",
          }}
          validateOnMount
          validationSchema={validation}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
          }}
        >
          {(formik) => (
            <Form>
              <FormInput label="Name" name="name" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="new_password" type="password" />
              <FormInput
                label="Confirm Password"
                name="retypePassword"
                type="password"
              />
              <Button className="btn-login rounded center mt-2 ">
                Sign up
              </Button>
            </Form>
          )}
        </Formik>

        <div className="continue-container">
          <div className="continue-with">
            <div></div>
            <p className="center">or continue with</p>
            <div></div>
          </div>
          <div className="continue-with-google">
            <img src={google} alt="google" />
            <p>Continue with google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
