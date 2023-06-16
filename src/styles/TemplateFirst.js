import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardContainerImage = styled.div`
  /* background-color: green; */
  border-right: 1.5px solid black;
  padding: 2rem 3rem;
  & > img {
    // width: 12rem;
    //  height: 12rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CardContainerContent = styled.div`
  padding: 0rem 3rem;
`;

export const CardHeadings = styled.div`
  margin-bottom: 1rem;
  & > h3 {
    font-size: 2.1rem;
    color: #7e7e7e;
  }
  & > h5 {
    font-size: 1.2rem;
    color: #7e7e7e;
    font-weight: 400;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  & > h6 {
    color: #7e7e7e;
    font-size: 1.3rem;
    width: 90px;
  }
  & > p {
    color: #7e7e7e;
    font-size: 1.2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > * {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;
