// import React, { useContext, useState, useRef } from "react";
// import * as Yup from "yup";
// import { Formik, Form } from "formik";
// import FormInput from "../FormInput/FormInput";
// import Heading from "../heading/Heading";
// import Modal from "../modal/Modal";
// import { EditerContext } from "../../AppContext";
// import { FiUpload } from "react-icons/fi";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import Button from "../button/Button";
// import Selector from "../selector/Selector";

// const General = () => {
//   // Modal

//   const [alert, setAlert] = useState(false);
//   const [selectField, setSelectField] = useState("Choose Type");

//   const { generalFields, setGeneralFields, setImg } = useContext(EditerContext);
//   const [inputFields, setInputFields] = useState(generalFields);

//   const handleChange = (event, index) => {
//     const oldFields = [...inputFields];
//     oldFields[index].value = event.target.value;
//     setInputFields(oldFields, image);
//     setGeneralFields(oldFields, image);
//   };

//   const [image, setImage] = useState();
//   const imageRef = useRef();
//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       setImg(URL.createObjectURL(img));
//     }
//   };

//   // vaidations

//   const validation = Yup.object({
//     label: Yup.string()
//       .min(2, "Must be 2 character")
//       .max(25, "Must be 25 characters or less")
//       .required("Lable is required"),
//   });

//   const inputType = ["Text", "Phone", "Email", "URL"];

//   return (
//     <>
//       {alert ? (
//         <Modal action={alert}>
//           <div className="modal-addnew-general-fields">
//             <div className="modal-addnew-general-fields-heading">
//               <h3>Select Add Input Field</h3>
//             </div>
//             <Formik
//               initialValues={{
//                 label: "",
//               }}
//               validateOnMount
//               validationSchema={validation}
//               onSubmit={(values, { resetForm }) => {
//                 console.log(values);
//                 resetForm({ values: "" });
//               }}
//             >
//               {(formik) => (
//                 <Form>
//                   <FormInput
//                     label="Enter Label"
//                     name="label"
//                     type="text"
//                     className="edit-input"
//                     margin="m-4"
//                   />
//                   <Selector
//                     name="SelectFont"
//                     data={inputType}
//                     className="editselector"
//                     label="Font family"
//                     selected={selectField}
//                     setSelected={setSelectField}
//                     value={selectField}
//                   />
//                   <Button className="btn-login rounded center mt-2 ">
//                     Add Input
//                   </Button>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </Modal>
//       ) : (
//         ""
//       )}

//       <div className="generaleditor">
//         <div className="generaleditor-container">
//           <Heading className="editor">Enter your signature details</Heading>
//           <div className="generaleditor-container-inputs">
//             <Formik
//               initialValues={{
//                 name: "",
//                 email: "",
//                 title: "",
//                 company: "",
//                 phone: "",
//                 websitelink: "",
//                 address: "",
//               }}
//               validateOnMount
//               // validationSchema={validation}
//               onSubmit={(values, { resetForm }) => {
//                 console.log(values);
//                 resetForm({ values: "" });
//               }}
//             >
//               {(formik) => (
//                 <>
//                   {inputFields.map((item, index) => {
//                     return (
//                       <FormInput
//                         key={index}
//                         label={item.label}
//                         name={item.name}
//                         type={item.type}
//                         value={item.value}
//                         className="edit-input"
//                         margin="m-4"
//                         onChange={(event) => {
//                           handleChange(event, index);
//                         }}
//                       />
//                     );
//                   })}

//                   <div className="uploadimag-btn">
//                     <button onClick={() => imageRef.current.click()}>
//                       <FiUpload />
//                       Upload Image
//                     </button>
//                   </div>

//                   {image && <img src={image} alt="service" />}

//                   <div style={{ display: "none" }}>
//                     <input
//                       type="file"
//                       name="myImage"
//                       ref={imageRef}
//                       onChange={onImageChange}
//                     />
//                   </div>

//                   <div className="addnew-inputfield">
//                     <button
//                       onClick={() => {
//                         setAlert(!alert);
//                       }}
//                     >
//                       <IoIosAddCircleOutline />
//                       Add a Field
//                     </button>
//                   </div>
//                   <div className="mt-4">.</div>
//                 </>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default General;






import React, { useContext, useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormInput from "../FormInput/FormInput";
import Heading from "../heading/Heading";
import Modal from "../modal/Modal";
import { EditerContext } from "../../AppContext";
import { FiUpload } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "../button/Button";
import Selector from "../selector/Selector";
const General = () => {
  // Modal
  const [alert, setAlert] = useState(false);
  const [selectField, setSelectField] = useState("Choose Type");
  const [id,setId]=useState(9)
  const { generalFields, setGeneralFields, setImg } = useContext(EditerContext);
  const [inputFields, setInputFields] = useState(generalFields);
  console.log(selectField);
  const handleChange = (event, index) => {
    const oldFields = [...inputFields];
    oldFields[index].value = event.target.value;
    setInputFields(oldFields, image);
    setGeneralFields(oldFields, image);
  };
  const [image, setImage] = useState();
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
    }
  };
  // vaidations
  const validation = Yup.object({
    label: Yup.string()
      .min(2, "Must be 2 character")
      .max(25, "Must be 25 characters or less")
      .required("Lable is required"),
  });
  const inputType = ["Text", "Phone", "Email", "URL"];
  // const modelUpdate = (values) => {
  //   const xyz = { label : values.label , field : selectField }
  //   console.log("Label Value:", xyz);
  // };
  useEffect(()=>{
    setInputFields(inputFields)
  },[inputFields])
  return (
    <>
      {alert ? (
        <Modal action={alert}>
          <div className="modal-addnew-general-fields">
            <div className="modal-addnew-general-fields-heading">
              <h3>Select Add Input Field</h3>
            </div>
            <Formik
              initialValues={{
                label: "",
              }}
              validateOnMount
              validationSchema={validation}
              onSubmit={(values, { resetForm }) => {
                setId(id+1)
                const newField = {
                  id:id,
                  label: values.label,
                  name: values.label,
                  type: selectField,
                  value: "",
                };
                setInputFields([...inputFields, newField]);
                //console.log(inputFields);
                console.log(newField);
                setAlert(false);
                console.log(values,selectField);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <div>
                <Form>
                  <FormInput
                    label="Enter Label"
                    name="label"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                  />
                  {/* <FormInput
                    label="Enter  your password"
                    name="password"
                    type="password"
                  /> */}
                  <Selector
                   key="fontFamilySelector"
                    name="SelectFont"
                    data={inputType}
                    className="editselector"
                    label="Font family"
                    selected={selectField}
                    setSelected={setSelectField}
                    value={selectField}
                  />
                  <Button className="btn-login rounded center mt-2">
                    Add Input
                  </Button>
                </Form>
                </div>
              )}
            </Formik>
          </div>
        </Modal>
      ) : (
        ""
      )}
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
                    <button
                      onClick={() => {
                        setAlert(!alert);
                      }}
                    >
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