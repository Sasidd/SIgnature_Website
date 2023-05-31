// import { useState } from "react";
// import FormInput from "../FormInput/FormInput";
// import Selector from "../selector/Selector";

// import { Formik } from "formik";
// import * as Yup from "yup";
// import Heading from "../heading/Heading";
// import { shape_radius, shape_rounded, shape_squre } from "../../assests";
// import Divider from "../divider/Divider";

// const Design = () => {
//   const [select, setSelected] = useState(false);
//   const [fontrange, setFontRange] = useState(0);
//   const [iconSize, setIconSize] = useState(0);
//   const [imageSize, setImageSize] = useState(0);
//   const [templatecolor, setTemplateColor] = useState("");
//   const [iconcolor, setIconColor] = useState("");
//   const [linecolor, setLineColor] = useState("");

//   const fonts = ["Arial", "Georgia", "Verdana", "Palatino", "Lato", "Roboto"];

//   const validation = Yup.object({
//     name: Yup.string()
//       .min(2, "Must be 2 character")
//       .max(50, "Must be 50 characters or less")
//       .required("Required"),
//     title: Yup.string()
//       .min(2, "Must be 2 character")
//       .max(50, "Must be 50 characters or less")
//       .required("Required"),
//     company: Yup.string()
//       .min(2, "Must be 2 character")
//       .max(50, "Must be 50 characters or less")
//       .required("Required"),
//     email: Yup.string().email("Email is invalid").required("Email is required"),

//     address: Yup.string()
//       .min(2, "Must be 2 character")
//       .max(50, "Must be 50 characters or less")
//       .required("Required"),
//   });
//   return (
//     <>
//       <div className="designeditor">
//         <div className="designeditor-container">
//           <Heading className="editor">Enhance your style</Heading>
//           <div className="designeditor-container-inputs">
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
//               validationSchema={validation}
//               onSubmit={(values, { resetForm }) => {
//                 console.log(values);
//                 resetForm({ values: "" });
//               }}
//             >
//               {(formik) => (
//                 <>
//                   <Selector
//                     data={fonts}
//                     selected="Choose Font"
//                     className="editselector"
//                     label="Font family"
//                   />

//                   <FormInput
//                     label="Font Size"
//                     name="name"
//                     type="range"
//                     className="edit-input"
//                     margin="m-4"
//                     min="10px"
//                     max="30px"
//                     number={fontrange}
//                     value={fontrange}
//                     onChange={(e) => setFontRange(e.target.value)}
//                   />
//                   <FormInput
//                     label="Template color"
//                     name="phone"
//                     type="color"
//                     className="edit-input"
//                     margin="m-4"
//                     value={templatecolor}
//                     onChange={(e) => setTemplateColor(e.target.value)}
//                     color={templatecolor}
//                     colorInput="color-input"
//                   />

//                   <Heading className="editor">Social media</Heading>

//                   <div className="iconShape">
//                     <h4>Shape</h4>
//                     <div>
//                       <img src={shape_squre} alt="icon" />
//                       <img src={shape_radius} alt="icon" />
//                       <img src={shape_rounded} alt="icon" />
//                     </div>
//                   </div>
//                   <FormInput
//                     label="Template color"
//                     name="phone"
//                     type="color"
//                     className="edit-input"
//                     margin="m-4"
//                     value={iconcolor}
//                     onChange={(e) => setIconColor(e.target.value)}
//                     color={iconcolor}
//                     colorInput="color-input"
//                   />
//                   <FormInput
//                     label="Icon Size"
//                     name="name"
//                     type="range"
//                     className="edit-input"
//                     margin="m-4"
//                     min="10px"
//                     max="30px"
//                     number={iconSize}
//                     value={iconSize}
//                     onChange={(e) => setIconSize(e.target.value)}
//                   />
//                   <Divider className="divider" />

//                   <Heading className="editor">Image</Heading>
//                   <FormInput
//                     label="Image Link"
//                     name="name"
//                     type="text"
//                     className="edit-input"
//                     margin="m-4"
//                   />
//                   <FormInput
//                     label="Image Size"
//                     name="name"
//                     type="range"
//                     className="edit-input"
//                     margin="m-4"
//                     min="10px"
//                     max="30px"
//                     number={imageSize}
//                     value={imageSize}
//                     onChange={(e) => setImageSize(e.target.value)}
//                   />

//                   <Divider className="divider" />
//                   <Heading className="editor">Decorative line</Heading>
//                   <Selector
//                     data={fonts}
//                     selected=""
//                     className="editselector"
//                     label="Style"
//                   />

//                   <FormInput
//                     label="Color"
//                     name="phone"
//                     type="color"
//                     className="edit-input"
//                     margin="m-4"
//                     value={linecolor}
//                     onChange={(e) => setLineColor(e.target.value)}
//                     color={linecolor}
//                     colorInput="color-input"
//                   />
//                 </>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Design;

import { useState, useEffect, useContext } from "react";
import FormInput from "../FormInput/FormInput";
import Selector from "../selector/Selector";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Heading from "../heading/Heading";
import { shape_radius, shape_rounded, shape_squre } from "../../assests";
import Divider from "../divider/Divider";
import { EditerContext } from "../../AppContext";

const Design = () => {
  const [select, setSelected] = useState(false);
  const [fontrange, setFontRange] = useState(13);
  const [iconSize, setIconSize] = useState(0);
  const [imageSize, setImageSize] = useState(100);
  const [templatecolor, setTemplateColor] = useState("");
  const [iconcolor, setIconColor] = useState("");
  const [linecolor, setLineColor] = useState("");

  const fonts = ["Arial", "Georgia", "Verdana", "Palatino", "Lato", "Roboto"];

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

  //   address: Yup.string()
  //     .min(2, "Must be 2 character")
  //     .max(50, "Must be 50 characters or less")
  //     .required("Required"),
  // });
  const { design, setDesign } = useContext(EditerContext);

  const handleDesignChange = (e) => {
    setDesign({
      ...design,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="designeditor">
        <div className="designeditor-container">
          <Heading className="editor">Enhance your style</Heading>
          <div className="designeditor-container-inputs">
            <Formik
              initialValues={{
                FontSize: fontrange,
                Template_Color: templatecolor,
                LineColor: linecolor,
                ImgSize: imageSize,
                ImageLink: null,
              }}
              validateOnMount
              // validationSchema={validation}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <Form>
                  {/* <Selector
                    name="FntStyle"
                    data={fonts}
                    selected="Choose Font"
                    className="editselector"
                    label="Font family"
                    onChange = {(e)=>{
                      formik.handleChange(e)
                      console.log(e.target.value);
                    }}
                  /> */}

                  <FormInput
                    label="Font Size"
                    name="FontSize"
                    type="range"
                    className="edit-input"
                    margin="m-4"
                    min="13"
                    max="30"
                    number={fontrange}
                    value={fontrange}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setFontRange(e.target.value);
                      console.log(e.target.value);
                      handleDesignChange(e);
                    }}
                  />
                  <FormInput
                    label="Template color"
                    name="Template_Color"
                    type="color"
                    className="edit-input"
                    margin="m-4"
                    value={templatecolor}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setTemplateColor(e.target.value);
                      console.log(e.target.value);
                      handleDesignChange(e);
                    }}
                    color={templatecolor}
                    colorInput="color-input"
                  />

                  <Heading className="editor">Social media</Heading>

                  <div className="iconShape">
                    <h4>Shape</h4>
                    <div>
                      <img src={shape_squre} alt="icon" />
                      <img src={shape_radius} alt="icon" />
                      <img src={shape_rounded} alt="icon" />
                    </div>
                  </div>
                  <FormInput
                    label="Icon Color"
                    name="phone"
                    type="color"
                    className="edit-input"
                    margin="m-4"
                    value={iconcolor}
                    onChange={(e) => setIconColor(e.target.value)}
                    color={iconcolor}
                    colorInput="color-input"
                  />
                  <FormInput
                    label="Icon Size"
                    name="name"
                    type="range"
                    className="edit-input"
                    margin="m-4"
                    min="10px"
                    max="30px"
                    number={iconSize}
                    value={iconSize}
                    onChange={(e) => setIconSize(e.target.value)}
                  />
                  <Divider className="divider" />

                  <Heading className="editor">Image</Heading>
                  <FormInput
                    label="Image Link"
                    name="ImageLink"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleDesignChange(e);
                    }}
                  />
                  <FormInput
                    label="Image Size"
                    name="ImgSize"
                    type="range"
                    className="edit-input"
                    margin="m-4"
                    min="100"
                    max="200"
                    number={imageSize}
                    value={imageSize}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setImageSize(e.target.value);
                      console.log(e.target.value);
                      handleDesignChange(e);
                    }}
                  />

                  <Divider className="divider" />
                  <Heading className="editor">Decorative line</Heading>
                  <Selector
                    data={fonts}
                    selected=""
                    className="editselector"
                    label="Style"
                  />

                  <FormInput
                    label="Color"
                    name="LineColor"
                    type="color"
                    className="edit-input"
                    margin="m-4"
                    value={linecolor}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setLineColor(e.target.value);
                      console.log(e.target.value);
                      handleDesignChange(e);
                    }}
                    color={linecolor}
                    colorInput="color-input"
                  />
                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
