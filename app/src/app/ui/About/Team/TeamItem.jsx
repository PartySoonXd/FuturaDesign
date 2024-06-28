import Image from "next/image"
import {motion} from 'framer-motion'

const TeamItem = ({teammateName, profession, description, image}) => {
    return (
        <motion.li 
            className="team-item"
            initial={{opacity: 0, y: "50px"}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                duration: .4,
                ease: [0.645, 0.045, 0.355, 1],
            }}
            viewport={{once: true, amount: .4}}
        >
            <div className="team-item-card">
                <Image src={image} alt={teammateName} className="team-item-card__image"/>
                <div className="team-item-card__info">
                    <h3 className="team-item-card__info-name h3">{teammateName}</h3>
                    <p className="team-item-card__info-profession p">{profession}</p>
                </div>
            </div>
            <div className="team-item__text p">{description}</div>
        </motion.li>
    )
}

export default TeamItem