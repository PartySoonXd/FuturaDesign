import Image from "next/image"
import {motion} from "framer-motion"

const ServiceCard = ({image, title, desription, anim}) => {
    return (
        <motion.li className="service-card" key={title} variants={anim}>
            <Image src={image} className="service-card-image" alt={title}/>
            <h3 className="service-card-title h3">{title}</h3>
            <div className="service-card-description">
                {desription.map((element, i) => {
                    return (
                        <p className="service-card-description-item p" key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
                                <path d="M0 0H7.5L15 30H7.5L0 0Z" fill="#FFD700"/>
                            </svg>
                            {element}
                        </p>
                    )
                })}
            </div>
        </motion.li>
    )
}

export default ServiceCard