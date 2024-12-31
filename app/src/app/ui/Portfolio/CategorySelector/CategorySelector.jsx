"use client"

import {motion} from 'framer-motion'
import CategorySelectorItem from './CategorySelectorItem'

const CategorySelector = () => {
    const categories = ["wardrobe", "lounge", "kitchen", "bedroom", "bathroom"]
    
    const container = {
        show: {
            transition: {
                delayChildren: .5,
                staggerChildren: .1
            }
        }
    }
    
    return (
        <div className="category-selector">
            <motion.ul
                className="category-selector-container"
                variants={container} 
                initial="hidden"
                animate="show"
            >   
                {Object.keys(categories).map((item) => {
                    return (
                        <CategorySelectorItem key={item} category={categories[item]}/>
                    )
                })}
            </motion.ul>
        </div>
    )
}

export default CategorySelector