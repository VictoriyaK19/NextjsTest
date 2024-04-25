import Image from "next/image";

export const Main = ({ image, title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
    </div>
  );
};
