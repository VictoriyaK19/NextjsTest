import Image from "next/image";
import { Card } from "../../collections/Card/Card";

import {
  StyledMainContainer,
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
  StyledContainer,
  StyledImageContainer,
  StyledCardsContainer,
} from "./elements";

const cardsData = [
  {
    image: {
      src: "/img/card/Design.png",
      alt: "design",
      width: 60,
      height: 60,
    },
    title: "Brief",
    description:
      "Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.",
  },
  {
    image: {
      src: "/img/card/customer_oriented.png",
      alt: "customer oriented",
      width: 60,
      height: 60,
    },
    title: "Search",
    description:
      "In-depth agency search covering, <strong>criteria matching</strong>, door knocking and due-dilligence vetting.",
  },
  {
    image: {
      src: "/img/card/business_meeting.png",
      alt: "business meeting",
      width: 60,
      height: 60,
    },
    title: "Pitch",
    description:
      "Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.",
  },
];

export const Main = ({ image, title, description }) => {
  return (
    <StyledMainContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>

      <StyledContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>

        <StyledCardsContainer>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </StyledCardsContainer>
      </StyledContainer>
    </StyledMainContainer>
  );
};
