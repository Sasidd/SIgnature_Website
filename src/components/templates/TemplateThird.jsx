import React, { useContext, useEffect } from "react";
import { facebook, pic } from "../../assests";
import {
  CardContainer,
  CardContainerContent,
  CardContainerImage,
  CardHeadings,
  CardInfo,
} from "../../styles/TemplateFirst";
import { EditerContext } from "../../AppContext";
import { AiFillFacebook , AiFillYoutube , AiFillInstagram , AiFillTwitterCircle , AiFillGithub  } from "react-icons/ai";
const TemplateThird = (props) => {
  const { design, img , setImg , addmore, setAddMore } = useContext(EditerContext);
  console.log(design)
  console.log(img);
  console.log(addmore);
  const openFacebookUrl = () => {
    const url = props.facebook.startsWith("http://") || props.facebook.startsWith("https://")
      ? props.facebook
      : `https://${props.facebook}`;
      console.log("Facebook");
    window.open(url, "_blank");
  };
  const openYoutubeUrl = () => {
    const url = props.youtube.startsWith("http://") || props.youtube.startsWith("https://")
      ? props.youtube
      : `https://${props.youtube}`;
      console.log("Youtube");
    window.open(url, "_blank");
  };
  const openInstagramUrl = () => {
    const url = props.instagram.startsWith("http://") || props.instagram.startsWith("https://")
      ? props.instagram
      : `https://${props.instagram}`;
      console.log("Instagram");
    window.open(url, "_blank");
  };
  const openTwitterUrl = () => {
    const url = props.twitter.startsWith("http://") || props.twitter.startsWith("https://")
      ? props.twitter
      : `https://${props.twitter}`;
      console.log("twitter");
    window.open(url, "_blank");
  };
  const openGithubUrl = () => {
    const url = props.github.startsWith("http://") || props.github.startsWith("https://")
      ? props.github
      : `https://${props.github}`;
      console.log("github");
    window.open(url, "_blank");
  };

  return (
    <>
    <div style={{backgroundColor:"black",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <img style={{borderRadius:"50%",marginTop:"5px"}}
            src={
              design.ImageLink === undefined || !design.ImageLink || "" 
                ? img || pic
                : `${design.ImageLink}`
            }
            width={!design.ImgSize ? "152rem" : design.ImgSize}
            height={!design.ImgSize ? "152rem" : design.ImgSize}
            alt="profile"
          />
        <CardContainerContent >
        <h3
              style={{
                fontSize: `${design.FontSize !== "13" ? "20px" : design.FontSize}`,
                color: `${!design.Template_Color?"white":design.Template_Color}`,
                fontFamily:`${design.SelectFont}`,
                textAlign:'center'
              }}
            >
              {props.name}
            </h3>
            <br />
          <CardHeadings>
            <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`,color: `white`, textAlign:'center' }}>
              {props.role} | <span>{props.company}</span>
            </h5>
          </CardHeadings>
          <CardHeadings>
            <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`,color: `white`, textAlign:'center' }}>
              Phone | <span>{props.phone}</span>
            </h5>
          </CardHeadings>
          <CardHeadings>
            <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`,color: `white`, textAlign:'center' }}>
            Website URL | <span>{props.url}</span>
            </h5>
          </CardHeadings>
          <CardHeadings>
            <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`,color: `white`, textAlign:'center' }}>
            Email Address | <span>{props.emailAddress}</span>
            </h5>
          </CardHeadings>
          <CardHeadings>
            <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`,color: `white`, textAlign:'center' }}>
            Address | <span>{props.address}</span>
            </h5>
          </CardHeadings>
          {Array.isArray(addmore) && addmore.map((element) => (
  <CardHeadings>
  <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`,color: `white`, textAlign:'center' }}>
  {element.label} |<span>{element.value}</span>
  </h5>
</CardHeadings>
))}
          <CardInfo style={{textAlign:'center'}}>
            <span style={{ fontSize: `${design.IconSize ? design.IconSize : 20}px`, cursor: 'pointer',border: `${props.facebook !== "" ? '1px solid black' : 'none'}`,marginRight:'10px',borderRadius:`${design.Shape}%`,color:`${design.IconColor}` }}>
            {props.facebook==""?"": < AiFillFacebook onClick={openFacebookUrl} />}  
            </span>
            <span style={{ fontSize: `${design.IconSize ? design.IconSize : 20}px`, cursor: 'pointer',border: `${props.youtube !== "" ? '1px solid black' : 'none'}`,marginRight:'10px',borderRadius:`${design.Shape}%`,color:`${design.IconColor}` }}>
            {props.youtube==""?"": < AiFillYoutube onClick={openYoutubeUrl} />}  
            </span>
            <span style={{ fontSize: `${design.IconSize ? design.IconSize : 20}px`, cursor: 'pointer',border: `${props.instagram !== "" ? '1px solid black' : 'none'}`,marginRight:'10px',borderRadius:`${design.Shape}%`,color:`${design.IconColor}` }}>
            {props.instagram==""?"": < AiFillInstagram onClick={openInstagramUrl} />}  
            </span>
            <span style={{ fontSize: `${design.IconSize ? design.IconSize : 20}px`, cursor: 'pointer',border: `${props.twitter !== "" ? '1px solid black' : 'none'}`,marginRight:'10px',borderRadius:`${design.Shape}%`,color:`${design.IconColor}` }}>
            {props.twitter==""?"": < AiFillTwitterCircle onClick={openTwitterUrl} />}   
            </span>
            <span style={{ fontSize: `${design.IconSize ? design.IconSize : 20}px`, cursor: 'pointer',border: `${props.github !== "" ? '1px solid black' : 'none'}`,marginRight:'2px',borderRadius:`${design.Shape}%`,color:`${design.IconColor}` }}>
            {props.github==""?"": < AiFillGithub onClick={openGithubUrl} />} 
            </span>
          </CardInfo>
        </CardContainerContent>
      </div>
      <br />
    </>
  );
};

export default TemplateThird;
