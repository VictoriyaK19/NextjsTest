import Image from "next/image";

import {
  StyledCardContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
} from "./elements";

export const Card = ({ image, title, description }) => {

  return (
    <StyledCardContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />

      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }}></StyledDescription>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
