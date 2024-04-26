import styled from "styled-components";
import { SectionSubheading, SectionParagraph } from "~/components";

export const StyledCardContainer = styled.div`
  max-width: 33rem;
  align-items: center;
  display: flex;
  margin: 1rem;
  border-radius: 15px;
  background-color: #e1e4e8;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #006efd;
  }
`;

export const StyledImageContainer = styled.div`
  max-width: 5rem;
  width: 70%;
  align-self: center;
  padding: 2rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 26rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTitle = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  font-weight: 700;
  color: black;
  transition: color 0.3s ease;

  ${StyledCardContainer}:hover & {
    color: #006efd;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
  margin: 0 0;
  text-align: left;
  width: 85%;
`;
