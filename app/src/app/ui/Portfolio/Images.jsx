import Image from 'next/image'
import axios from "axios"
import { Masonry } from '@mui/lab'
import { useEffect, useState } from 'react'
import {Buffer} from "buffer"
import {motion} from "framer-motion"

const Images = ({category}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages([])
        const getImages = async () => {
            try {
                if (category != null) {
                    const images = await axios.get(`/api/portfolio/get?category=${category}`)
                    setImages(images.data.files)
                }
            } catch (error) {
                
            }
        }
        getImages()
    }, [category])
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
                    const base64Image = new Buffer.from(images[item].file.data).toString("base64")
                    return (
                        <motion.div 
                            className="image-container"
                            initial={{opacity: 0, y: "50px"}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: .4,
                                ease: [0.645, 0.045, 0.355, 1],
                            }}
                            viewport={{once: true, amount: .4}}
                        >
                            <Image 
                                className='images-img' 
                                src={`data:image/png;base64,${base64Image}`} 
                                width="400" 
                                height="250" 
                                alt={`${category} image`}
                                key={i}
                            />
                        </motion.div>
                    )
                })}
            </Masonry>
        )
    }
}

export default Images