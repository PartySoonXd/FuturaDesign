import Image from "next/image"
import {motion} from 'framer-motion'

import ButtonLink from "@/app/lib/ButtonLink/ButtonLink"

const About = () => {
    const container = {
        show: { 
            transition: {
                delayChildren: .5,
                staggerChildren: .05,
            }
        }
    }
    const item = {
        hidden: {
            opacity: 0,
            x: '50px'
        },
        show: { 
            opacity: 1,
            x: 0,
            transition: {
                ease: [.24,1.74,.77,1.01],
                duration: .2,
            }
        }
    }
    return (
        <div className="about-us">
            <div className="about-us-container">
                <motion.h2 
                    className="about-us-title h2"
                    initial={{ opacity: 0, y: "20px" }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: .5, ease: [0.645, 0.045, 0.355, 1]}}
                    viewport={{once: true}}
                >
                    About us
                </motion.h2>
                <motion.p 
                    className="about-us-text p"
                    initial={{ opacity: 0, x: "-50px"}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{duration: .3, delay: .4, ease: [0.645, 0.045, 0.355, 1]}}
                    viewport={{once: true}}
                >
                    Futura is a cutting-edge interior design studio that combines sleek aesthetics with forward-thinking concepts. With a team of innovative designers, we specialize in creating spaces that seamlessly merge functionality and style. Our approach is characterized by clean lines, bold color schemes, and a harmonious blend of modern and timeless elements. From residential to commercial projects, we strive to exceed expectations by delivering personalized and tailored solutions that reflect our clients' unique tastes and aspirations. With a passion for pushing boundaries and a commitment to excellence, Futura is dedicated to transforming spaces into extraordinary experiences.
                </motion.p>
                <motion.div 
                    className="button-container"
                    initial={{opacity: 0, y: "50px"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: .15,
                        delay: .7,
                        ease: [.24,1.74,.77,1.01]
                    }}
                    viewport={{once: true}}
                >
                    <ButtonLink text="Read more" href="/about"/> 
                </motion.div>
            </div>
            <motion.ul 
                className="about-us-benefits"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
            >
                <motion.li className="about-us-benefits__item" variants={item}>
                    <div className="about-us-benefits__item-icon">
                        <Image src="/images/first-benefit-icon.svg" width={30} height={30} alt="benefit"/>
                    </div>
                    <div className="about-us-benefits__item-text links">Highly qualified specialists</div>
                </motion.li>
                <motion.li className="about-us-benefits__item" variants={item}>
                    <div className="about-us-benefits__item-icon">
                        <Image src="/images/second-benefit-icon.svg" width={30} height={30} alt="benefit"/>
                    </div>
                    <div className="about-us-benefits__item-text links">High quality services</div>
                </motion.li>
                <motion.li className="about-us-benefits__item" variants={item}>
                    <div className="about-us-benefits__item-icon">
                        <Image src="/images/third-benefit-icon.svg" width={30} height={30} alt="benefit"/>
                    </div>
                    <div className="about-us-benefits__item-text links">Individual design and style</div>
                </motion.li>
            </motion.ul>
        </div>
    )
}

export default About