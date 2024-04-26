// The Card to be exported goes here
import Image from "next/image";

import {

} from "./elements";

export const Card  = ({ image, title, description }) => {
    return (
        <div>
            
            <h3>{title}</h3>
            <p>{description}</p>
            <Image
                layout="responsive"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
            />
        </div>
    )
}