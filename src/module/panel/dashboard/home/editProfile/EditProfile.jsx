import React, { useRef, useState } from "react";
import "./EditProfile.scss";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Topbar } from "../../../../../components/common";
import { Container, Heading, Input, Button } from "../../../../../components";
import { profile } from "../../../../../assests";

// Icons
import { RiEditBoxFill } from "react-icons/ri";

const EditProfile = () => {
  // Image Preview code
  const [image, setImage] = useState(profile);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  // validation
  const validation = Yup.object({
    name: Yup.string(),
    email: Yup.string().email(),
  });
  return (
    <>
      <div>
        <Topbar />

        <Container className="medium">
          <div className="space-between">
            <Heading className="secondry">Edit profile</Heading>
            <div className="edit_profile">
              <img src={profile} alt="profile" />
              <div className="edit_profile-icon">
                <RiEditBoxFill />
              </div>
            </div>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validateOnMount
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => (
              <Form>
                <Input label="Name" name="name" type="text" />
                <Input label="Email" name="email" type="email" />
                <Input label="Password" name="password" type="password" />
                <Input
                  label="Confirm Password"
                  name="password"
                  type="password"
                />
                <div className="save-btn align-item-center">
                  <Button className="btn-secondry-light">Cancel</Button>
                  <Button className="btn-secondry">Save</Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
};

export default EditProfile;
