import {motion} from 'framer-motion'

import ApproachItem from "./ApproachItem"

const Approach = () => {
    const container = {
        show: {
            transition: {
                delayChildren: 1.2,
                staggerChildren: .15
            }
        }
    }
    const item = {
        hidden: {
            opacity: 0,
            y: "30px"
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                ease: [.24,1.74,.77,1.01], 
            }
        }
    }
    return (
        <div className="approach">
            <div className="container">
                <motion.h2 
                    className="approach-title"
                    initial={{ opacity: 0, y: "20px" }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: .4, delay: .8, ease: [0.645, 0.045, 0.355, 1]}}
                    viewport={{once: true, amount: 1 }}
                >
                    <span className="title-element h2">Our approach</span>
                    <span className="h2">to bussines</span>
                </motion.h2>
                <motion.ul 
                    className="approach-list"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: .25}}
                >
                    <ApproachItem 
                        text="Futura is an interior design company that offers its clients unique and innovative solutions to create stylish and functional spaces. Combining creativity and a professional     approach, we strive to turn the most daring ideas into reality."
                        anim={item}
                        />
                    <ApproachItem
                        text="One of our main goals is to create spaces that are not only beautiful, but also functional. We focus on practicality and convenience to ensure that every space we design suits our clients' needs and lifestyles. We strive to create harmonious and elegant interiors that not only impress guests, but also bring joy and comfort to the owners. "
                        anim={item}
                        />
                    <ApproachItem
                        text="Futura is proud of its portfolio of successfully completed projects. Our ability to turn dreams into reality has earned us the trust and recognition of our clients. We work with a variety of types of premises, including residential and commercial properties, and throughout our task remains the same - to make interiors as comfortable and aesthetically pleasing as possible. "
                        anim={item}
                        />
                    <ApproachItem
                        text="The main principle of Futura's work is an individual approach to each project. We work closely with our clients to understand their needs and preferences and then develop a unique design that reflects their style and taste. A team of professionals, including experienced designers and architects, works on every project with utmost dedication and attention to detail. "
                        anim={item}
                        />
                    <ApproachItem
                        text="When developing interior design, we rely on the latest technologies and trends. We follow the latest trends in the design world in order to offer our clients current and stylish solutions. We continually update our knowledge base and build our skills to stay ahead of the curve while staying true to our unique identity. "
                        anim={item}
                        />
                    <ApproachItem
                        text="If you are looking for a reliable and talented team to develop your interior design, Futura is ready to offer its services. With us you will receive a unique and individual approach that will meet your expectations and requirements. We guarantee that when working with Futura, you will get interiors that will delight you for many years!"
                        anim={item}
                    />
                </motion.ul>
            </div>
        </div>
    )
}

export default Approach