import {motion} from 'framer-motion'

const SlidesPagination = ({count, currentSlide, isPause}) => {
    return (
        <motion.div 
            className="slides-pagination"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .2, delay: 1.2}}
        >
            {[...Array(count)].map((elem, i) => {
                return (
                    <span 
                        className={`slides-pagination-item ${currentSlide === i ? "active": ""} ${isPause ? "pause": ""}`} 
                        id={i}
                        key={i}
                    ></span>
                )
            })}
        </motion.div>
    )
}
export default SlidesPagination