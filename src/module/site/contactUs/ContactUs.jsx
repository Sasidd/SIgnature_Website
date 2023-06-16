import React from "react";
import "./ContactUs.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Faq,
  Heading,
  FormInput,
  Button,
  Container,
  FormText,
} from "../../../components";

const ContactUs = () => {
  const validation = Yup.object({
    name: Yup.string()
      .min(2, "Must be 2 character")
      .max(25, "Must be 25 characters or less")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    message: Yup.string()
      .min(2, "Must be 2 character")
      .max(25, "Must be 25 characters or less")
      .required("Message is required"),
  });

  return (
    <>
      <div className="contactus">
        <div className="bg-blue m-6">
          <div className="contactus-heading">
            <Heading className="primary center">Contact us</Heading>
            <h5>Contact the help team</h5>
          </div>
        </div>

        <Container className="main">
          <div className="contactus-form">
            <Container className="sm">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
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
                    <FormInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="blueinput"
                    />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Your email address"
                      className="blueinput"
                    />
                    <FormText
                      name="message"
                      label="Enter Your Message"
                      type="text"
                      className="bluetext"
                    />
                    <Button className="btn-primary rounded  mt-2 ">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              <div className="contactus-location-container">
                <div className="contactus-location">
                  <h3>Call Us</h3>
                  <p>675-3244-345-111</p>
                </div>
                <div className="contactus-location">
                  <h3>location</h3>
                  <p>
                    1134 Castle Hill Ave Bronx North Dakota Zip/ <br /> Postal
                    Code 10462 United States America
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </Container>

        <Faq />
      </div>
    </>
  );
};

export default ContactUs;
