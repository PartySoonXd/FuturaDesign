import { useSearchParams } from "next/navigation"

import CategorySelector from "./CategorySelector"
import Images from "./Images"

const Portfolio = () => {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
     
    return (
        <div className="image-gallery">
            <div className="container">
                <CategorySelector category={category}/>
                <Images category={category}/>
            </div>
        </div>
    )
}

export default Portfolio