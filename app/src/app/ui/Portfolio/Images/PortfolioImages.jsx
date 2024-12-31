"use client"

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useEffect, useState } from 'react'
import { apiHost } from '@/app/http'
import { useSearchParams } from 'next/navigation'

const PortfolioMasonry = () => {
    const [images, setImages] = useState([])

    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    useEffect(() => {
        const getImages = async () => {
            try {
                if (searchParams.has('category')) {
                    const images = await apiHost.get(`/portfolio/get-in-category?category=${category}`)
                    setImages(images.data)
                }
            } catch (error) {
                return error
            }
        }
        getImages()
    }, [searchParams])

    const imageLoader = ({ src }) => {
        return `${process.env.NEXT_PUBLIC_API_URL}static/${src}`
    }
    
    return (
        <div className="container">
            <ResponsiveMasonry
                columnsCountBreakPoints={{250: 1, 550: 2, 998: 3}}
                className='portfolio-masonry'
            >
                <Masonry gutter='15px'>
                    {images && images.map((item, i) => {
                        return (
                            <div className="portfolio-masonry-img-container" key={i}>
                                <Image 
                                    className='portfolio-masonry-img' 
                                    loader={imageLoader}
                                    src={`/images/portfolio/${category}/${item}`} 
                                    width={400} 
                                    height={250} 
                                    alt={`${category} image`}
                                />
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default PortfolioMasonry