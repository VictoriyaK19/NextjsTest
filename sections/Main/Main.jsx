import Image from "next/image";
import { Card } from "../../collections/Card/Card";

const cardsData = [
  {
    image: {
      src: "/img/card/Design.png",
      alt: "design",
      width: 60,
      height: 60,
    },
    title: "Brief",
    description: "Complete brief writing or simple guidance on what to include, we've got you covered.",
},{
  image: {
    src: "/img/card/customer_oriented.png",
    alt: "customer oriented",
    width: 60,
    height: 60,
  },
  title: "Search",
  description: "In-depth agency search covering, criteria matching, door knocking and due-dilligence vetting.",
},
{
  image: {
    src: "/img/card/business_meeting.png",
    alt: "business meeting",
    width: 60,
    height: 60,
  },
  title: "Pitch",
  description: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
},

]

export const Main = ({ image, title, description}) => {
  return (
    <div>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
    </div>
    <div>
    {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
    </div>
    </div>
  );
};
