import React, { useContext, useState } from "react";
import Heading from "../heading/Heading";
import FormInput from "../FormInput/FormInput";
import { Formik } from "formik";
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

      <div className="mt-4">.</div>
    </>
  );
};

export default Social;
