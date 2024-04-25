// The Card to be exported goes here
import Image from "next/image";

export const Card  = ({ image, title, description }) => {
    return (
        <div>
            <Image
                layout="responsive"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}