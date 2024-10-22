import { useState } from "react"
import {motion} from 'framer-motion'

import ButtonLink from "@/app/lib/ButtonLink/ButtonLink"

const Sidebar = ({slides, currentSlide}) => {
    const [isActive, setIsActive] = useState(false)

    return( 
        <motion.aside 
            className={`home-page-intro-sidebar ${isActive ? "active": "inactive"}`}
            initial={{x: "100%"}}
            animate={{x: 0}}
            transition={{duration: .3, delay: .9, ease: [0.645, 0.045, 0.355, 1]}}
        >
            <button className={`home-page-intro-sidebar-button ${isActive ? "active": "inactive"}`} type="click" onClick={() => setIsActive(!isActive)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM3 10.5L2 10.5L2 13.5L3 13.5L3 10.5Z" fill="white"/>
                </svg>
            </button>
            <div className="home-page-intro-sidebar-container">
                <div className="home-page-intro-siderbar-text">
                    <h3 className="home-page-intro-sidebar__title">
                        {slides[currentSlide].title}
                    </h3>
                    <p className="home-page-intro-sidebar__description p">
                        {slides[currentSlide].desription}
                    </p>
                </div>
                <ButtonLink text="More works" href={`/portfolio?category=${slides[currentSlide].title.toLowerCase()}`} customClass="sidebar-button"/>
            </div>
        </motion.aside>
    )
}

export default Sidebar