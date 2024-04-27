import styled from "styled-components";

export const StyledSectionContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
