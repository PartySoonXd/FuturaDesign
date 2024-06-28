import {motion} from 'framer-motion'

const PageTitle = ({title}) => {
    return (
        <motion.div 
            className="page-title-container" 
            style={{background: "#303030", margin: "0 -60px"}}
            initial={{x: '-100%'}}
            animate={{x: 0}}
            transition={{
                duration: .5,
                ease: [0.645, 0.045, 0.355, 1]
            }}
        >
            <div className="container">
                <motion.h1 
                    className="page-title h1" 
                    style={{color: "#fff", margin: "40px 0"}}
                    initial={{opacity: 0, y: "30px"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .3, delay: .5, ease: [.24,1.74,.77,1.01]}}
                >
                    {title}
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default PageTitle