import {motion} from "framer-motion"

const ApproachItem = ({text, anim}) => {
    return (
        <motion.li className="approach-item" variants={anim}>
            <p className="approach-item__text p">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="60" viewBox="0 0 20 60" fill="none">
                    <path d="M0 0H10L20 60H10L0 0Z" fill="#FFD700"/>
                </svg>
                {text}
            </p>
        </motion.li>
    )
}

export default ApproachItem