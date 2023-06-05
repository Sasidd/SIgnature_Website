import React, { useContext, useState, useRef } from "react";
import FormInput from "../FormInput/FormInput";
import Heading from "../heading/Heading";
import { Formik } from "formik";
import { EditerContext } from "../../AppContext";
import { FiUpload } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";

const General = () => {
  const { generalFields, setGeneralFields } = useContext(EditerContext);
  const [inputFields, setInputFields] = useState(generalFields);

  const handleChange = (event, index) => {
    const oldFields = [...inputFields];
    oldFields[index].value = event.target.value;
    setInputFields(oldFields);
    setGeneralFields(oldFields);
  };

  const [image, setImage] = useState();
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
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

                  <div className="uploadimag-btn">
                    <button onClick={() => imageRef.current.click()}>
                      <FiUpload />
                      Upload Image
                    </button>
                  </div>

                  {image && <img src={image} alt="service" />}

                  <div style={{ display: "none" }}>
                    <input
                      type="file"
                      name="myImage"
                      ref={imageRef}
                      onChange={onImageChange}
                    />
                  </div>

                  <div className="addnew-inputfield">
                    <button>
                      <IoIosAddCircleOutline />
                      Add a Field
                    </button>
                  </div>
                  <div className="mt-4">.</div>
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
