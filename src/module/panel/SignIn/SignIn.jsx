import React from "react";
import "./SignIn.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { Heading, FormInput, Button } from "../../../components";
import { google } from "../../../assests";
const SignIn = () => {
  const validation = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <Heading className="secondry center">Sign in</Heading>
      <br />
      <br />
      <Formik
        initialValues={{
          email: "",
          password: "",
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
            <FormInput label="Enter your email" name="email" type="email" />
            <FormInput
              label="Enter  your password"
              name="password"
              type="password"
            />
            <Button className="btn-login rounded center mt-2 ">Login</Button>
          </Form>
        )}
      </Formik>
      <div className="continue-container">
        <div className="donot-have-account center">
          <p>
            Don’t have account?
            <Link to="/signup"> Create new account </Link>
          </p>
        </div>
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
    </>
  );
};

export default SignIn;
