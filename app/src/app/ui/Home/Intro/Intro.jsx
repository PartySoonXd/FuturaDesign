import { useState, useEffect } from "react"
import Image from "next/image"
import {motion} from 'framer-motion'

import BackgroundSlides from "./BackgroundSlides"
import {slides} from "./utils.js"
import SlidesPagination from "./SlidesPagination"

import sidearrowImage from "../../../../../public/images/sidearrow.png"
import Sidebar from "./Sidebar"


const Intro = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPause, setIsPause] = useState(false)

    let timer

    const slideHandler = () => {
        clearTimeout(timer)
        if (currentSlide + 1 >= slides.length) {
            setCurrentSlide(0)
            return
        }
        setCurrentSlide(currentSlide + 1)
    }
    const onClickStart = () => {
        setIsPause(true)
        clearTimeout(timer)
    }
    const onClickEnd = (device) => {
        if (device === "mobile") {
            return
        } else {
            setIsPause(false)
            slideHandler()
        }
    }
    if (!isPause) {
        timer = setTimeout(slideHandler, 5000)
    }
    return (
        <div className="home-page-intro">
            <div 
                className="container"
                onMouseDown={onClickStart} 
                onMouseUp={onClickEnd} 
                onTouchStart={onClickStart}
                onTouchCancel={() => onClickEnd("mobile")} 
            >
                <motion.h1 
                    className="home-page-intro-title"
                    initial={{opacity: 0, y: "30px"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .3, delay: .6, ease: [.24,1.74,.77,1.01]}}
                >
                    <span className="title-element h1">Your dream turn</span>
                    <span className="h1">to reality here</span>
                </motion.h1>
                <motion.div 
                    className="home-page-intro-sidearrow"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: .2, delay: 1.2}}
                >
                    <Image src={sidearrowImage} className="home-page-intro-sidearrow__image"/>
                    <div className="home-page-intro-sidearrow-text">
                        <span className="home-page-intro-sidearrow-text__element">Make</span>
                        <span className="home-page-intro-sidearrow-text__element yellow-text">Future</span>
                        <span className="home-page-intro-sidearrow-text__element">Now</span>
                    </div>
                </motion.div>
                <SlidesPagination count={slides.length} currentSlide={currentSlide} isPause={isPause}/>
            </div>
            <Sidebar slides={slides} currentSlide={currentSlide}/>
            <BackgroundSlides currentSlide={currentSlide} slides={slides}/>
        </div>
    )
}

export default Intro