import styled from "styled-components";
import { SectionSubheading, SectionParagraph } from "~/components";

export const StyledCardContainer = styled.div`
  max-width: 33vw;
  width: 100%;
  align-items: center;
  display: flex;
  margin: 1rem;
  border-radius: 15px;
  background-color: #e1e4e8;
  position: relative;


  &:nth-child(1) {
    position: relative;

    ${props =>
      props.isMobile &&
      `
      &::before {
        content: "link to brief"; 
        position: absolute;
        top: 10px; 
        right: -5rem; 
        color: red;
        font-size: 1.3rem;
        font-weight: bold;
        transform: rotate(15deg);
        transform-origin: right top;
      }

      &::after {
        content: "generator??"; 
        position: absolute;
        top: 20px; 
        right:  -5rem; 
        color: red;
        font-size: 1.3rem; 
        font-weight: bold;
        transform: rotate(15deg);
      }
    `}
  }

  &:nth-child(1) {
    max-width: 85%;
    position: relative;
  }

  &:nth-child(2) {
    max-width: 90%;
  }

  &:nth-child(3) {
  max-width: 95%;
  border: 2px solid transparent;
  border-color: #006efd;
  color: #006efd;
`;

export const StyledImageContainer = styled.div`
  max-width: 5rem;
  width: 70%;
  align-self: center;
  padding: 2rem;

  @media (max-width: 1024px) {
    max-width: 3.5rem;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`;

export const StyledTitle = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
  margin: 0 0;
  text-align: left;
  width: 90%;
  color: black;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;
