import React, { useContext, useState } from "react";
import FormInput from "../FormInput/FormInput";
import Heading from "../heading/Heading";
import { Formik } from "formik";
import { EditerContext } from "../../AppContext";

const General = () => {
  const { generalFields, setGeneralFields } = useContext(EditerContext);
  const [inputFields, setInputFields] = useState(generalFields);

  const handleChange = (event, index) => {
    const oldFields = [...inputFields];
    oldFields[index].value = event.target.value;
    setInputFields(oldFields);
    setGeneralFields(oldFields);
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
  //   phone: Yup.number()
  //     .typeError("That doesn't look like a phone number")
  //     .positive("A phone number can't start with a minus")
  //     .integer("A phone number can't include a decimal point")
  //     .min(8)
  //     .required("A phone number is required"),
  //   websitelink: Yup.string().matches(re, "URL is not valid"),
  //   address: Yup.string()
  //     .min(2, "Must be 2 character")
  //     .max(50, "Must be 50 characters or less")
  //     .required("Required"),
  // });
  return (
    <>
      <div className="generaleditor">
        <div className="generaleditor-container">
          <Heading className="editor">Enter your signature details</Heading>
          <div className="generaleditor-container-inputs">
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
                        className="edit-input"
                        margin="m-4"
                        onChange={(event) => {
                          handleChange(event, index);
                        }}
                      />
                    );
                  })}
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;

