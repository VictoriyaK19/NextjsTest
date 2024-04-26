import styled from "styled-components";

export const StyledSectionContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  max-width: 100%;
  width: 100%;
  height: auto;

  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
