import {motion} from 'framer-motion'

import ServiceCard from "./ServiceCard"

import { useRef } from "react"

const Services = ({element}) => {
    const ref = useRef()
    if (element === "services") {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    const cardItem = {
        hidden: {
            opacity: 0,
            y: '80px'
        },
        show: { 
            y: 0,
            opacity: 1,
            transition: {
                ease: [.24,1.74,.77,1.01],
                duration: .5,
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
                <motion.ul className="service-cards">
                    <ServiceCard 
                        image="/images/first-service.webp" 
                        title="Individual interior design" 
                        desription={[
                            'Creation of unique concepts and room layouts',
                            'Selection of materials, furniture and accessories'
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image="/images/second-service.webp"
                        title="Visualization of projects" 
                        desription={[
                            'Creation of photorealistic 3D visualizations for a visual representation of the future interior.',
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image="/images/third-service.webp" 
                        title="Purchase and supply of furniture" 
                        desription={[
                            'Assistance in choosing and purchasing furniture, lighting, textiles, and other interior elements.',
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image="/images/fourth-service.webp" 
                        title="Consultation on style and colors" 
                        desription={[
                            'Assistance in appropriate interior style and creating a floral palette.',
                        ]}
                        anim={cardItem}
                    />
                    <ServiceCard 
                        image="/images/fifth-service.webp" 
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