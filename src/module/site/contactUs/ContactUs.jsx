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
} from "../../../components";
import FormText from "../../../components/FormInput/FormText";

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
                    <FormInput label="Name" name="name" type="text" />
                    <FormInput label="Email" name="email" type="email" />
                    {/* <FormText label="Enter Your Message" type="text" /> */}
                    <Button className="btn-primary rounded  mt-2 ">
                      Sign up
                    </Button>
                  </Form>
                )}
              </Formik>
            </Container>
          </div>
        </Container>

        <Faq />
      </div>
    </>
  );
};

export default ContactUs;
