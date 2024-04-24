// The Card to be exported goes here
import Image from "next/image";

export const Card  = ({ image, title, description }) => {
    return (
        <div>
            <Image />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}