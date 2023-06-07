import { useState, useEffect, useContext } from "react";
import FormInput from "../FormInput/FormInput";
import Selector from "../selector/Selector";

import { Formik, Form, Field } from "formik";
import Heading from "../heading/Heading";
import { shape_radius, shape_rounded, shape_squre } from "../../assests";
import Divider from "../divider/Divider";
import { EditerContext } from "../../AppContext";

const Design = () => {
  const [selectFont, setSelectFont] = useState("Choose Font");
  const [selectBorder, setSelectedBorder] = useState("Choose Size");

  const fonts = ["Arial", "Georgia", "Verdana", "Palatino", "Lato", "Roboto"];
  const border = ["2px", "4px", "6px", "8px", "10px"];

  const [fontrange, setFontRange] = useState(13);
  const [iconSize, setIconSize] = useState(0);
  const [imageSize, setImageSize] = useState(100);
  const [templatecolor, setTemplateColor] = useState("");
  const [iconcolor, setIconColor] = useState("");
  const [linecolor, setLineColor] = useState("");
  // const [font,setFont]=useState("")

  const { design, setDesign } = useContext(EditerContext);

  const handleDesignChange = (e) => {
    setDesign({
      ...design,
      [e.target.name]: e.target.value,
      selectFont: selectFont, // Include selectFont and selectBorder here
      selectBorder: selectBorder,
    });
  };

  useEffect(() => {
    handleDesignChange({ target: { name: "SelectFont", value: selectFont } });
  }, [selectFont, selectBorder]);
  return (
    <>
      <div className="designeditor">
        <div className="designeditor-container">
          <Heading className="editor">Enhance your style</Heading>
          <div className="designeditor-container-inputs">
            <Formik
              initialValues={{
                SelectFont: selectFont,
                FontSize: fontrange,
                Template_Color: templatecolor,
                LineColor: linecolor,
                ImgSize: imageSize,
                ImageLink: null,
              }}
              validateOnMount
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <Form>
                  <Selector
                    name="SelectFont"
                    data={fonts}
                    className="editselector"
                    label="Font family"
                    selected={selectFont}
                    setSelected={setSelectFont}
                    value={selectFont}
                  />
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
                      console.log(e.target);
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
                    name="FntStyle"
                    data={border}
                    className="editselector"
                    label="Style"
                    selected={selectBorder}
                    setSelected={setSelectedBorder}
                    onChange={(e) => {
                      formik.handleChange(e);
                      console.log(e.target.value);
                    }}
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

                  <div className="mt-4">.</div>
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
