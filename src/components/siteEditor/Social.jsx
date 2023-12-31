import React, { useContext, useRef, useState } from "react";
import Heading from "../heading/Heading";
import FormInput from "../FormInput/FormInput";
import { Formik, Form } from "formik";
import { EditerContext } from "../../AppContext";
import Button from "../button/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import Modal from "../modal/Modal";
import * as Yup from "yup";
import Selector from "../selector/Selector";

const Social = () => {
  const { socialFields, setSocialFields } = useContext(EditerContext);
  const [inputFields, setInputFields] = useState(socialFields);
  const handleChange = (event, index) => {
    const oldFields = [...inputFields];
    oldFields[index].value = event.target.value;
    setInputFields(oldFields);
    setSocialFields(oldFields);
  };

  const validation = Yup.object({
    label: Yup.string()
      .min(2, "Must be 2 characters")
      .max(25, "Must be 25 characters or less")
      .required("Icon name is required"),
  });

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
      {/* <div className="addnew-inputfield">
        <button
        >
          <IoIosAddCircleOutline />
          Add a Field
        </button>
      </div> */}
      <div className="mt-4">.</div>
    </>
  );
};

export default Social;
