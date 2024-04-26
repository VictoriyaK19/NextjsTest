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
