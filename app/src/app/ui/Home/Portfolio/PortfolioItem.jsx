import Link from "next/link"
import {motion} from "framer-motion"

const PortfolioItem = ({itemName, image, anim}) => {
    return (
        <motion.li className={`portfolio-item ${itemName}`} variants={anim}>
            <Link href={{
                pathname: "/portfolio",
                query: {category: itemName}
            }}>
                <div className="portfolio-item-container">
                    <motion.div 
                        className="portfolio-item__title"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{
                            duration: .25,
                            delay: .6,
                            ease: [0.645, 0.045, 0.355, 1]
                        }}
                    >
                        {itemName}
                    </motion.div>
                    <div style={{overflow: "hidden"}}>
                        <img src={image} className="portfolio-item__image" alt={`${itemName}-preview`}/>
                    </div>
                    <motion.div 
                        className="portfolio-item__button"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{
                            duration: .25,
                            delay: .4,
                            ease: [0.645, 0.045, 0.355, 1]
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="8" viewBox="0 0 31 8" fill="none">
                            <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="white"/>
                        </svg>
                    </motion.div>
                </div>
            </Link>
        </motion.li>   
    )
}

export default PortfolioItem