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
  const { design } = useContext(EditerContext);
  return (
    <>
      <CardContainer>
        <CardContainerImage
          style={{
            borderRight: `1px solid ${
              !design.LineColor ? "black" : design.LineColor
            }`,
          }}
        >
          <img
            src={
              design.ImageLink === undefined || !design.ImageLink || ""
                ? pic
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
              }}
            >
              {props.name}
            </h3>
            <h5 style={{ fontSize: `${design.FontSize}px` }}>
              {props.role} , <span>{props.company}</span>
            </h5>
          </CardHeadings>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px` }}>Phone :</h6>
            <p style={{ fontSize: `${design.FontSize}px` }}>{props.phone}</p>
          </CardInfo>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px` }}>Website URL :</h6>
            <p style={{ fontSize: `${design.FontSize}px` }}>{props.url}</p>
          </CardInfo>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px` }}>
              Email Address :
            </h6>
            <p style={{ fontSize: `${design.FontSize}px` }}>
              {props.emailAddress}
            </p>
          </CardInfo>
          <CardInfo>
            <h6 style={{ fontSize: `${design.FontSize}px` }}>Address :</h6>
            <p style={{ fontSize: `${design.FontSize}px` }}>{props.address}</p>
          </CardInfo>
        </CardContainerContent>
      </CardContainer>
    </>
  );
};

export default TemplateFirst;
