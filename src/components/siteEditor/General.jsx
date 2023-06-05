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
