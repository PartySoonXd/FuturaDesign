import {motion} from "framer-motion"

import TeamItem from "./TeamItem"

import benjaminImg from "../../../../../public/images/benjamin.jpg"
import oliviaImg from "../../../../../public/images/olivia.jpg"
import emilyImg from "../../../../../public/images/emily.jpg"
import isaacImg from "../../../../../public/images/isaac.jpg"
import lucasImg from "../../../../../public/images/lucas.jpg"
import chloeImg from "../../../../../public/images/chloe.jpg"

const Team = () => {
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
        <div className="team">
            <div className="container">
                <motion.h2 
                    className="team-title h2"
                    initial={{ opacity: 0, y: "20px" }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: .3, delay: .8, ease: [0.645, 0.045, 0.355, 1]}}
                    viewport={{once: true, amount: 1 }}
                >
                    Our team
                </motion.h2>
                <ul className="team-list">
                    <TeamItem 
                        teammateName="Benjamin Turner"
                        profession="Senior Architect"
                        description="Benjamin Turner is a seasoned Senior Architect with an extensive background in designing and implementing innovative architectural solutions. With over a decade of experience, he has led complex projects, collaborating closely with clients to understand their vision and translating it into practical designs. His expertise in sustainable and eco-friendly design approaches sets him apart, as he strives to create spaces that harmoniously blend aesthetics with functionality. Benjamin's exceptional leadership abilities and passion for his craft make him a highly sought-after professional in the industry."
                        image={benjaminImg}
                    />
                    <TeamItem 
                        teammateName="Olivia Morgan"
                        profession="Creative Director"
                        description="Olivia Morgan is an experienced and accomplished Creative Director who brings a wealth of talent and innovation to the table. With a keen eye for detail and a deep understanding of market trends, she has a proven track record of creating captivating and impactful campaigns that resonate with audiences. Olivia's expertise lies not only in graphic design and branding, but also in developing cohesive and compelling brand messages across various platforms. With her strategic approach and exceptional leadership skills, Olivia consistently inspires and guides her team to deliver outstanding and creative results."
                        image={oliviaImg}
                    />
                    <TeamItem 
                        teammateName="Emily Stevens"
                        profession="Head Designer"
                        description="Emily Stevens is a talented and creative head designer. With a keen eye for detail and a deep understanding of aesthetics, she is able to conceptualize and bring to life extraordinary designs. Her ability to think outside the box and push boundaries sets her apart from others in her field. She has a passion for innovation, constantly seeking new trends and technologies to incorporate into her designs. With her strong communication skills, she effectively communicates her vision to stakeholders and clients, ensuring everyone is aligned throughout the design process. Emily is also highly organized and efficient, able to manage multiple projects simultaneously while maintaining high standards of quality."
                        image={emilyImg}
                    />
                    <TeamItem 
                        teammateName="Isaac Mitchel"
                        profession="Electrical Designer"
                        description="Isaac Mitchel is an exceptional Electrical Designer with a passion for creating innovative and efficient electrical systems. With years of experience in the industry, Isaac possesses a deep understanding of electrical engineering principles and is skilled in using cutting-edge design software. He excels in translating complex technical requirements into practical designs, ensuring optimal functionality and safety. Isaac's attention to detail and problem-solving abilities enable him to overcome challenges and deliver successful projects. He is a valuable asset in any team, bringing creativity, expertise, and a strong work ethic to every project he undertakes."
                        image={isaacImg}
                    />
                    <TeamItem 
                        teammateName="Lucas Thompson"
                        profession="Project Manager"
                        description="Lucas Thompson is an exceptional Project Manager with a proven track record of overseeing successful projects from start to finish. With his strong leadership skills and attention to detail, he consistently delivers projects on time and within budget. Lucas has a knack for building and managing high-performing teams, fostering collaboration, and maintaining clear communication channels throughout the project lifecycle. His ability to adapt to changing priorities and solve complex problems makes him a valuable asset to any organization. Lucas is highly regarded for his strategic thinking, organizational expertise, and commitment to delivering exceptional results."
                        image={lucasImg}
                    />
                    <TeamItem 
                        teammateName="Chloe Campbell"
                        profession="Visualizer"
                        description="Chloe Campbell is a talented visualizer whose work truly captivates the senses. With her keen eye for detail and expert use of color, she effortlessly brings the imagination to life. Chloe's visualizations are immersive and dynamic, transporting viewers to mesmerizing worlds of their own. Whether it's creating stunning landscapes or crafting intricate character designs, Chloe's unique artistic style is both captivating and thought-provoking. With each piece, she seamlessly blends creativity with technical mastery, resulting in visually stunning and evocative masterpieces. Chloe Campbell is undoubtedly a rising star in the world of visual art."
                        image={chloeImg}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Team