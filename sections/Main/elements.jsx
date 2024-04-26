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
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionHeading {...props} />
))`
  margin-top: 0;
`;

export const StyledDescription = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  margin-top: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  margin-bottom: 2rem;
  flex-direction: column;
`;

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
  align-items: center;
  dispaly: flex;
`;

export const StyledImageContainer = styled.div`
  width: 70%;
  height: 100%;
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
