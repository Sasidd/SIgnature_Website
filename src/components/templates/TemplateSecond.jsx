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

const TemplateSecond = (props) => {

  const {design} = useContext(EditerContext)
  console.log(design.ImageLink)
  return (
    <>
      <CardContainer>
        <CardContainerImage style={{borderRight:`1px solid ${!design.LineColor?"black":design.LineColor}`}}>
          <img src={design.ImageLink === undefined || !design.ImageLink || '' ? pic : `${design.ImageLink}`} width={!design.ImgSize?"152rem":design.ImgSize} height={!design.ImgSize?"152rem":design.ImgSize}  alt="profile" />
        </CardContainerImage>
        <CardContainerContent>
          <CardHeadings>
            <h1>{props.name}</h1>
            <h3 >
              {props.role}  
            </h3>
            <h3 >
              {props.company}  
            </h3>
          </CardHeadings>
          <CardInfo>
            <p>Phone :</p>
            <p>{props.phone}</p>
          </CardInfo>
          <CardInfo>
            <p>Website URL :</p>
            <p>{props.url}</p>
          </CardInfo>
          <CardInfo>
            <h6>Email Address :</h6>
            <p>{props.emailAddress}</p>
          </CardInfo>
          <CardInfo>
            <h6>Address :</h6>
            <p>{props.address}</p>
          </CardInfo>
        </CardContainerContent>
      </CardContainer>
    </>
  )
}

export default TemplateSecond