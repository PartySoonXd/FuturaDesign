import {motion} from 'framer-motion'

import ServiceCard from "./ServiceCard"

import firstService from "../../../../../public/images/first-service.jpg"
import secondService from "../../../../../public/images/second-service.jpg"
import thirdService from "../../../../../public/images/third-service.jpg"
import fourthService from "../../../../../public/images/fourth-service.jpg"
import fifthService from "../../../../../public/images/fifth-service.jpg"
import { useRef } from "react"

const Services = ({element}) => {
    const ref = useRef()
    if (element === "services") {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    const cardsContainer = {
        hidden: {opacity: 0},
        show: { 
            opacity: 1,
            transition: {
                delayChildren: .4,
                staggerChildren: .1,
            }
        }
    }
    const cardItem = {
        hidden: {
            opacity: 0,
            y: '50px'
        },
        show: { 
            y: 0,
            opacity: 1,
            transition: {
                ease: [.24,1.74,.77,1.01],
                duration: .4,
            }
        }
    }
    return (
        <div className="service" ref={ref}>
            <div className="container">
                <motion.h2 
                    className="service-title h2"
                    initial={{ opacity: 0, y: "20px" }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: .5, ease: [0.645, 0.045, 0.355, 1]}}
                    viewport={{once: true, amount: 1 }}
                >
                    Services
                </motion.h2>
                <motion.ul 
                    className="service-cards"
                    variants={cardsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: .35 }}
                >
                    <ServiceCard 
                        image={firstService} 
                        title="Individual interior design" 
                        desription={[
                            'Creation of unique concepts and room layouts',
                            'Selection of materials, furniture and accessories'
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image={secondService} 
                        title="Visualization of projects" 
                        desription={[
                            'Creation of photorealistic 3D visualizations for a visual representation of the future interior.',
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image={thirdService} 
                        title="Purchase and supply of furniture" 
                        desription={[
                            'Assistance in choosing and purchasing furniture, lighting, textiles, and other interior elements.',
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image={fourthService} 
                        title="Consultation on style and colors" 
                        desription={[
                            'Assistance in appropriate interior style and creating a floral palette.',
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image={fifthService} 
                        title="Lighting and electrical planning" 
                        desription={[
                            'Development of an effective lighting system and planning of the indoor electrical network'
                        ]}
                        anim={cardItem}
                    />
                </motion.ul>
            </div>
        </div>
    )
}

export default Services