import React, { createContext, useState } from "react";
import { generalFieldsData } from "./data/generalFieldsData";
import { socialFieldsData } from "./data/socialFieldsData";
export const EditerContext = createContext();

const AppContext = (props) => {
  const [generalFields, setGeneralFields] = useState(generalFieldsData);
  const [socialFields, setSocialFields] = useState(socialFieldsData);
  const [design, setDesign] = useState({});
  const [img,setImg]= useState('')
  const [switching , setSwitching] = useState(false)
  const [addmore, setAddMore] = useState('');
  console.log(generalFields);
  return (
    <>
      <EditerContext.Provider
        value={{
          generalFields,
          setGeneralFields,
          socialFields,
          setSocialFields,
          design,
          setDesign,
          img,
          setImg,
          switching,
          setSwitching,
          addmore,
          setAddMore
        }}
      >
        {props.children}
      </EditerContext.Provider>
    </>
  );
};

export default AppContext;
