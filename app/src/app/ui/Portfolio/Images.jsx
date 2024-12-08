import Image from 'next/image'
import { Masonry } from '@mui/lab'
import { useEffect, useState } from 'react'
import { apiHost } from '@/app/http'

const Images = ({category}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages([])
        const getImages = async () => {
            try {
                if (category != null) {
                    const images = await apiHost.get(`/portfolio/get-in-category?category=${category}`)
                    setImages(images.data)
                }
            } catch (error) {
                return error
            }
        }
        getImages()
    }, [category])

    const imageLoader = ({ src }) => {
        return `${process.env.NEXT_PUBLIC_API_URL}static/${src}`
    }
    if (images) {
        return (
            <Masonry
                columns={3}
                spacing={2}
                defaultHeight={800}
                defaultColumns={3}
                defaultSpacing={0}
            >
                {Object.keys(images).map((item, i) => {
                    return (
                        <div 
                            className="image-container"
                            initial={{opacity: 0, y: "50px"}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: .4,
                                ease: [0.645, 0.045, 0.355, 1],
                            }}
                            viewport={{once: true, amount: .4}}
                            key={i}
                        >
                            <Image 
                                className='images-img' 
                                loader={imageLoader}
                                src={`/images/portfolio/${category}/${images[item]}`} 
                                width={400} 
                                height={250} 
                                alt={`${category} image`}
                            />
                        </div>
                    )
                })}
            </Masonry>
        )
    }
}

export default Images