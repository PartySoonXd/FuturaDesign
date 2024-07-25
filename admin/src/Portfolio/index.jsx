import { Title } from "react-admin"
import axios from "axios"
import { Masonry } from '@mui/lab'
import { useState } from "react"
import { Buffer } from 'buffer';
import { Notification } from "../Components/Notification/Notification";

const Portfolio = () => {
    const [images, setImages] = useState()
    const [category, setCategory] = useState()

    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const [preview, setPreview] = useState()

    const config = {
        headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": process.env.REACT_APP_ADMIN_URL,
            "Access-Control-Allow-Methods": "GET,PUT,PATCH,OPTIONS,POST,DELETE",
            "Access-Control-Max-Age": "86400",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Max-Age"
        }
    }
    const getPreview = (image) => {
        const blob = URL.createObjectURL(image)
        setPreview(blob)
    }
    const fetchImages = async (category) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/get?category=${category}`, config).then(data => {
            setImages(data.data.files)
        })
    }
    const addImage = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/add`, formData, config).then(data => {
                setIsActive(true)
                setTitle("Success!")
                setText("Image was added")
            })
            fetchImages(category)
        } catch (error) {
            setIsActive(true)
            setTitle("Error!")
            setText(error.response.data.text)
        }
    }
    const deleteImage = async (name) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/portfolio/delete?name=${name}&category=${category}`).then(data => {
                setIsActive(true)
                setTitle("Success!")
                setText("Image was deleted")
            })
            fetchImages(category)
        } catch (error) {
            console.log(error)
        }
    }
    if (isActive) {
        setTimeout(() => {
            setIsActive(false)
        }, 3000)
    }
    return (
        <>
        <Notification isActive={isActive} title={title} text={text}/>
        <Title title="Portfolio"/>
        <div className="portfolio">
            <div className="portfolio-add-image">
                <div>
                    <h2 className="portfolio-subtitle">Add new image</h2>
                    <form method="post" onSubmit={e => addImage(e)} encType="multipart/form-data" className="portfolio-form">
                        <select 
                            name="category" 
                            defaultValue="category" 
                            id="category" 
                            className="portfolio-category-selector" 
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="category" className="portfolio-category-option" disabled>Category</option>
                            <option value="wardrobe" className="portfolio-category-option">Wardrobe</option>
                            <option value="lounge" className="portfolio-category-option">Lounge</option>
                            <option value="bathroom" className="portfolio-category-option">Bathroom</option>
                            <option value="bedroom" className="portfolio-category-option">Bedroom</option>
                            <option value="kitchen" className="portfolio-category-option">Kitchen</option>
                        </select>
                        <label htmlFor="picture" className="portfolio-form-input">
                            <img src="upload-icon.png" alt="upload" />
                            <p>click to choose</p>
                        </label>
                        <input type="file" name="picture" id="picture" onChange={e => getPreview(e.target.files[0])}/>
                        <button type="submit" className="portfolio-form-button" disabled={isActive}>Submit</button>
                    </form>
                </div>
                {preview && <img src={preview} alt="preview" className="portfolio-form-preview"/>}
            </div>
            <h2 className="portfolio-subtitle">Delete image</h2>
            <select name="category" id="category" defaultValue="category" className="portfolio-category-selector" onChange={e => fetchImages(e.target.value)}>
                <option value="category" className="portfolio-category-option" disabled>Category</option>
                <option value="wardrobe" className="portfolio-category-option">Wardrobe</option>
                <option value="lounge" className="portfolio-category-option">Lounge</option>
                <option value="bathroom" className="portfolio-category-option">Bathroom</option>
                <option value="bedroom" className="portfolio-category-option">Bedroom</option>
                <option value="kitchen" className="portfolio-category-option">Kitchen</option>
            </select>
            <div className="portfolio-masonry">
            {images && <Masonry
                columns={3}
                spacing={2}
                defaultHeight={800}
                defaultColumns={3}
                defaultSpacing={0}
            >
                {Object.keys(images).map((item, i) => {
                    const base64Image = new Buffer.from(images[item].file.data).toString("base64")
                    return (
                        <div className="portfolio-masonry-image-container" key={i}>
                            <img src="/delete-icon.png" alt="delete" id={images[item].name} className="portfolio-masonry-delete" onClick={e => deleteImage(e.target.id)}/>
                            <img 
                                className='portfolio-masonry-img' 
                                src={`data:image/png;base64,${base64Image}`} 
                                alt={`${category} image`}
                            />
                        </div>
                    )
                })}
            </Masonry>}
            </div>
        </div>
        </>
    )
}

export default Portfolio