import React, { useContext } from "react";
import { pic } from "../../assests";
import {
  CardContainer,
  CardContainerContent,
  CardContainerImage,
  CardHeadings,
  CardInfo,
  SocialIcons
} from "../../styles/TemplateFirst";
import { EditerContext } from "../../AppContext";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

const TemplateSecond = (props) => {

  const {design ,  img , setImg , addmore , setAddMore} = useContext(EditerContext)
  const openFacebookUrl = () => {
    const url =
      props.facebook.startsWith("http://") ||
      props.facebook.startsWith("https://")
        ? props.facebook
        : `https://${props.facebook}`;
    console.log("Facebook");
    window.open(url, "_blank");
  };
  const openYoutubeUrl = () => {
    const url =
      props.youtube.startsWith("http://") ||
      props.youtube.startsWith("https://")
        ? props.youtube
        : `https://${props.youtube}`;
    console.log("Youtube");
    window.open(url, "_blank");
  };
  const openInstagramUrl = () => {
    const url =
      props.instagram.startsWith("http://") ||
      props.instagram.startsWith("https://")
        ? props.instagram
        : `https://${props.instagram}`;
    console.log("Instagram");
    window.open(url, "_blank");
  };
  const openTwitterUrl = () => {
    const url =
      props.twitter.startsWith("http://") ||
      props.twitter.startsWith("https://")
        ? props.twitter
        : `https://${props.twitter}`;
    console.log("twitter");
    window.open(url, "_blank");
  };
  const openGithubUrl = () => {
    const url =
      props.github.startsWith("http://") || props.github.startsWith("https://")
        ? props.github
        : `https://${props.github}`;
    console.log("github");
    window.open(url, "_blank");
  };
  return (
    <>
      <CardContainer>
        <CardContainerImage style={{borderRight:`1px solid ${!design.LineColor?"black":design.LineColor}`}}>
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
            <h1 style={{
                fontSize: `${design.FontSize}px`,
                color: `${design.Template_Color}`,
                fontFamily: `${design.SelectFont}`,
              }}>{props.name}</h1>
            <h3 style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>
              {props.role}  
            </h3>
            <h3 style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>
              {props.company}  
            </h3>
          </CardHeadings>
          <CardInfo>
            <p style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>Phone :</p>
            <p style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>{props.phone}</p>
          </CardInfo>
          <CardInfo>
            <p style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>Website URL :</p>
            <p  style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>{props.url}</p>
          </CardInfo>
          <CardInfo>
            <h6 style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>Email Address :</h6>
            <p style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>{props.emailAddress}</p>
          </CardInfo>
          <CardInfo>
            <h6 style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>Address :</h6>
            <p style={{
                fontSize: `${design.FontSize}px`,
                fontFamily: `${design.SelectFont}`,
              }}>{props.address}</p>
          </CardInfo>
          {Array.isArray(addmore) &&
            addmore.map((element) => (
              <CardInfo>
                <h6
                  style={{
                    fontSize: `${design.FontSize}px`,
                    fontFamily: `${design.SelectFont}`,
                  }}
                >
                  {element.label} :
                </h6>
                <p
                  style={{
                    fontSize: `${design.FontSize}px`,
                    fontFamily: `${design.SelectFont}`,
                  }}
                >
                  {element.value}
                </p>
              </CardInfo>
            ))}
              <SocialIcons>
              <span
                style={{
                  fontSize: `${design.IconSize ? design.IconSize : 20}px`,
                  cursor: "pointer",
                  border: `${
                    props.facebook !== "" ? "1px solid black" : "none"
                  }`,
                  borderRadius: `${design.Shape}%`,
                  color: `${design.IconColor}`,
                }}
              >
                {props.facebook == "" ? (
                  ""
                ) : (
                  <AiFillFacebook onClick={openFacebookUrl} />
                )}
              </span>
              <span
                style={{
                  fontSize: `${design.IconSize ? design.IconSize : 20}px`,
                  cursor: "pointer",
                  border: `${
                    props.youtube !== "" ? "1px solid black" : "none"
                  }`,
                  borderRadius: `${design.Shape}%`,
                  color: `${design.IconColor}`,
                }}
              >
                {props.youtube == "" ? (
                  ""
                ) : (
                  <AiFillYoutube onClick={openYoutubeUrl} />
                )}
              </span>
              <span
                style={{
                  fontSize: `${design.IconSize ? design.IconSize : 20}px`,
                  cursor: "pointer",
                  border: `${
                    props.instagram !== "" ? "1px solid black" : "none"
                  }`,
                  borderRadius: `${design.Shape}%`,
                  color: `${design.IconColor}`,
                }}
              >
                {props.instagram == "" ? (
                  ""
                ) : (
                  <AiFillInstagram onClick={openInstagramUrl} />
                )}
              </span>
              <span
                style={{
                  fontSize: `${design.IconSize ? design.IconSize : 20}px`,
                  cursor: "pointer",
                  border: `${
                    props.twitter !== "" ? "1px solid black" : "none"
                  }`,
                  borderRadius: `${design.Shape}%`,
                  color: `${design.IconColor}`,
                }}
              >
                {props.twitter == "" ? (
                  ""
                ) : (
                  <AiFillTwitterCircle onClick={openTwitterUrl} />
                )}
              </span>
              <span
                style={{
                  fontSize: `${design.IconSize ? design.IconSize : 20}px`,
                  cursor: "pointer",
                  border: `${props.github !== "" ? "1px solid black" : "none"}`,
                  borderRadius: `${design.Shape}%`,
                  color: `${design.IconColor}`,
                }}
              >
                {props.github == "" ? (
                  ""
                ) : (
                  <AiFillGithub onClick={openGithubUrl} />
                )}
              </span>
            </SocialIcons>
        </CardContainerContent>
      </CardContainer>
    </>
  )
}

export default TemplateSecond