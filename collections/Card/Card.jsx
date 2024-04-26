import React, { useState, useEffect } from 'react';
import Image from "next/image";

import {
  StyledCardContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
} from "./elements";

export const Card = ({ image, title, description }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <StyledCardContainer isMobile={isMobile}>
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
