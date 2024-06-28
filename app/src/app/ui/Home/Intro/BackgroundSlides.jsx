import {motion} from 'framer-motion'

const BackgroundSlides = ({currentSlide, slides}) => {
    return (
        <motion.div 
            className="background-slides"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .6}}
        >
            {Object.keys(slides).map((item, i) => {
                return (
                    <img 
                        src={slides[item].imagePath} 
                        key={i} 
                        className={`background-slides__image ${currentSlide === i ? "active": "inactive"}`} 
                    />
                )

            })}
        </motion.div>
    )
}

export default BackgroundSlides