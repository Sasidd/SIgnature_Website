import React, { useContext } from "react";
import { pic } from "../../assests";
import {
  CardContainer,
  CardContainerContent,
  CardContainerImage,
  CardHeadings,
  CardInfo,
} from "../../styles/TemplateFirst";
import { EditerContext } from "../../AppContext";
const TemplateFirst = (props) => {
  const { design, img , setImg } = useContext(EditerContext);
  console.log(design)
  console.log(img);
  return (
    <>
      <CardContainer>
        <CardContainerImage
          style={{
            borderRight: `${design.selectBorder} solid ${
              !design.LineColor ? "black" : design.LineColor
            }`,
            // width:"0px"
          }}
        >
          <img
            src={
              design.ImageLink === undefined || !design.ImageLink || "" 
                ? img || pic
                : `${design.ImageLink}`
            }
            width={!design.ImgSize ? "152rem" : design.ImgSize}
            height={!design.ImgSize ? "152rem" : design.ImgSize}
            alt="profile"
          />
        </CardContainerImage>
        <CardContainerContent>
          <CardHeadings>
            <h3
              style={{
                fontSize: `${design.FontSize}px`,
                color: `${design.Template_Color}`,
                fontFamily:`${design.SelectFont}`
              }}
            >
              {props.name}
            </h3>
            <h5 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}`  }}>
              {props.role} , <span>{props.company}</span>
            </h5>
          </CardHeadings>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>Phone :</h6>
            <p style={{ fontSize: `${design.FontSize}px`, fontFamily:`${design.SelectFont}` }}>{props.phone}</p>
          </CardInfo>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>Website URL :</h6>
            <p style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>{props.url}</p>
          </CardInfo>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>
              Email Address :
            </h6>
            <p style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>
              {props.emailAddress}
            </p>
          </CardInfo>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>Address :</h6>
            <p style={{ fontSize: `${design.FontSize}px`,fontFamily:`${design.SelectFont}` }}>{props.address}</p>
          </CardInfo>
        </CardContainerContent>
      </CardContainer>
    </>
  );
};

export default TemplateFirst;
