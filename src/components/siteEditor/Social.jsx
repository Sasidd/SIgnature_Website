import React, { useContext, useState } from "react";
import Heading from "../heading/Heading";
import FormInput from "../FormInput/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { e_facebook } from "../../assests";
import { EditerContext } from "../../AppContext";

const Social = () => {
  const { socialFields, setSocialFields } = useContext(EditerContext);
  const [inputFields, setInputFields] = useState(socialFields);

  const handleChange = (event, index) => {
    const oldFields = [...inputFields];
    oldFields[index].value = event.target.value;
    setInputFields(oldFields);
    setSocialFields(oldFields);
  };

  // const re =
  //   /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
  // const validation = Yup.object({
  //   name: Yup.string()
  //     .min(2, "Must be 2 character")
  //     .max(50, "Must be 50 characters or less")
  //     .required("Required"),
  //   title: Yup.string()
  //     .min(2, "Must be 2 character")
  //     .max(50, "Must be 50 characters or less")
  //     .required("Required"),
  //   company: Yup.string()
  //     .min(2, "Must be 2 character")
  //     .max(50, "Must be 50 characters or less")
  //     .required("Required"),
  //   email: Yup.string().email("Email is invalid").required("Email is required"),
  //   websitelink: Yup.string().matches(re, "URL is not valid"),
  //   address: Yup.string()
  //     .min(2, "Must be 2 character")
  //     .max(50, "Must be 50 characters or less")
  //     .required("Required"),
  // });
  return (
    <>
      <Heading className="editor">Added social icons</Heading>
      <Formik
        initialValues={{
          name: "",
          email: "",
          title: "",
          company: "",
          phone: "",
          websitelink: "",
          address: "",
        }}
        validateOnMount
        // validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        {(formik) => (
          <>
            {inputFields.map((item, index) => {
              return (
                <FormInput
                  key={index}
                  label={item.label}
                  name={item.name}
                  type={item.type}
                  value={item.value}
                  iconField={true}
                  icon={item.icon}
                  className="edit-input"
                  margin="m-4"
                  leftpadding="padding-left-true"
                  iconDelete={true}
                  onChange={(event) => {
                    handleChange(event, index);
                  }}
                />
              );
            })}
          </>
        )}
      </Formik>
    </>
  );
};

export default Social;
