"use client"

import {motion} from 'framer-motion'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

const CategorySelectorItem = ({category}) => {
    const searchParams = useSearchParams()
    const categoryQuery = searchParams.get('category')

    const item = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: .3,
                ease: [.24,1.74,.77,1.01], 
            }
        }
    }

    return (
        <motion.li className={`category ${category === categoryQuery ? "active" : ""}`} variants={item}>
            <Link 
                className='category-text h3'
                href={{
                    pathname: "/portfolio",
                    query: {category}
                }}
            >
                {category}
            </Link>
        </motion.li>
    )
}

export default CategorySelectorItem