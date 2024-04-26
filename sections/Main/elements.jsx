import styled from "styled-components";

import {
  SectionHeading,
  SectionSubheading,
  SectionContainer,
} from "~/components";

export const StyledMainContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  text-align: center;
  flex-direction: column;
  margin-top: 3rem;

  @media (max-width: 767px) {
    padding: 2rem;
    background-size: contain;
    background-position: center 20%;
    }
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionHeading {...props} />
))`
  margin: 0;
  font-size: 2.5rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const StyledDescription = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  margin-top: 0;
  font-size: 1.3rem;

  @media (max-width: 767px) {
    font-size: 0.8rem;
    margin: 0;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  margin: 1rem 0 2rem 0;
  flex-direction: column;

  @media (max-width: 767px) {
   margin: 0;
  }
`;

export const StyledContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledImageContainer = styled.div`
  margin: 2rem;
  max-width: 20rem;
  width: 50%;

  @media (max-width: 767px) {
    width: 55%;
  }
`;

export const StyledCardsContainer = styled.div`
  max-width: 33rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    max-width: 100%;
    margin: 1rem 0 ;
  }
`;
