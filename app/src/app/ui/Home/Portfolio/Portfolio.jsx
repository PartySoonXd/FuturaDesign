import {motion} from "framer-motion"

import kitchenPreview from "../../../../../public/images/kitchen-preview.jpg"
import wardrobePreview from "../../../../../public/images/wardrobe-preview.jpg"
import bedroomPreview from "../../../../../public/images/bedroom-preview.jpg"
import bathroomPreview from "../../../../../public/images/bathroom-preview.jpg"
import loungePreview from "../../../../../public/images/lounge-preview.jpg"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
    const portfolioContainer = {
        show: { 
            transition: {
                staggerChildren: .25,
            }
        }
    }
    const portfolioList = {
        show: { 
            transition: {
                staggerChildren: .1,
            }
        }
    }

    const portfolioItem = {
        hidden: {
            opacity: 0,
            x: '80px'
        },
        show: { 
            opacity: 1,
            x: 0,
            transition: {
                ease: [.24,1.74,.77,1.01],
                duration: .4,
            }
        }
    }
    return (
        <div className="portfolio">
            <motion.h2 
                className="portfolio-title h2"
                initial={{ opacity: 0, y: "20px" }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: .5, ease: [0.645, 0.045, 0.355, 1]}}
                viewport={{once: true}}
            >
                Portfolio
            </motion.h2>
            <motion.div 
                className="portfolio-items-container"
                variants={portfolioContainer}
                whileInView="show"
                viewport={{once: true}}
                >
                <motion.ul
                    className="portfolio-items" 
                    variants={portfolioList}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    >
                    <PortfolioItem itemName="kitchen" image={kitchenPreview} anim={portfolioItem}/>
                    <PortfolioItem itemName="wardrobe" image={wardrobePreview} anim={portfolioItem}/>
                    <PortfolioItem itemName="bedroom" image={bedroomPreview} anim={portfolioItem}/>
                </motion.ul>
                <motion.ul 
                    className="portfolio-items"
                    variants={portfolioList}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <PortfolioItem itemName="bathroom" image={bathroomPreview} anim={portfolioItem}/>
                    <PortfolioItem itemName="lounge" image={loungePreview} anim={portfolioItem}/>
                </motion.ul>
            </motion.div>
        </div>
    )
}

export default Portfolio