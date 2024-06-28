import {motion} from 'framer-motion'
import Link from "next/link"

const CategorySelector = ({category}) => {
    const container = {
        show: {
            transition: {
                delayChildren: .5,
                staggerChildren: .1
            }
        }
    }
    const item = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: .3,
                ease: [.24,1.74,.77,1.01], 
            }
        }
    }
    return (
        <div className="category-selector">
            <motion.div 
                className="category-selector-container"
                variants={container} 
                initial="hidden"
                animate="show"
            >   
                <motion.div className="link-container" variants={item}>
                    <Link href={{
                        pathname: "/portfolio",
                        query: {category: "wardrobe"}
                    }}>
                        <h3 className={`category h3 ${category === 'wardrobe' ? "active" : ""}`}>
                            Wardrobe
                        </h3>
                    </Link>
                </motion.div>
                <motion.div className="link-container" variants={item}>
                    <Link href={{
                        pathname: "/portfolio",
                        query: {category: "kitchen"}
                    }}>
                        <h3 className={`category h3 ${category === 'kitchen' ? "active" : ""}`}>
                            Kitchen
                        </h3>
                    </Link>
                </motion.div>
                <motion.div className="link-container" variants={item}>
                    <Link href={{
                        pathname: "/portfolio",
                        query: {category: "bedroom"}
                    }}>
                        <h3 className={`category h3 ${category === 'bedroom' ? "active" : ""}`}>
                            Bedroom
                        </h3>
                    </Link>
                </motion.div>
                <motion.div className="link-container" variants={item}>
                    <Link href={{
                        pathname: "/portfolio",
                        query: {category: "bathroom"}
                    }}>
                        <h3 className={`category h3 ${category === 'bathroom' ? "active" : ""}`}>
                            Bathroom
                        </h3>
                    </Link>
                </motion.div>
                <motion.div className="link-container" variants={item}>
                    <Link href={{
                        pathname: "/portfolio",
                        query: {category: "lounge"}
                    }}>
                        <h3 className={`category h3 ${category === 'lounge' ? "active" : ""}`}>
                            Lounge
                        </h3>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CategorySelector