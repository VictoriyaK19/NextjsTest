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
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionHeading {...props} />
))`
  margin: 0;
`;

export const StyledDescription = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  margin-top: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  margin: 1rem 0 2rem 0;
  flex-direction: column;
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
`;

export const StyledCardsContainer = styled.div`
  max-width: 33rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;
