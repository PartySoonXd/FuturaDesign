import { Title } from "react-admin"
import { Masonry } from '@mui/lab'
import { useState } from "react"
import { Notification } from "../Components/Notification/Notification";
import { apiHost } from "../http";

const Portfolio = () => {
    const [images, setImages] = useState()
    const [category, setCategory] = useState()

    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const [preview, setPreview] = useState()

    const getPreview = (image) => {
        const blob = URL.createObjectURL(image)
        setPreview(blob)
    }

    const fetchImages = async (category) => {
        setCategory(category)
        await apiHost.get(`/portfolio/get-in-category?category=${category}`).then(({data}) => {
            setImages(data)
        })
    }

    const addImage = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)

            if (data.file.size === 0 || category === null || category === "category") {
                setIsActive(true)
                setTitle("Error!")
                setText("File or category is undefined")
                return
            }

            await apiHost.post(`/portfolio/create`, data, {
                headers: {
                  'content-type': 'multipart/form-data',
                },
            }).then(({data}) => {
                setIsActive(true)
                setTitle(data.title)
                setText(data.message)
            })
            fetchImages(category)
        } catch (error) {
            setIsActive(true)
            setTitle("Error!")
            setText("Something wrong! Try later")
        }
    }

    const deleteImage = async (name) => {
        try {
            await apiHost.delete(`/portfolio/delete/${name}?category=${category}`).then(({data}) => {
                setIsActive(true)
                setTitle("Success!")
                setText(data.message)
            })
            fetchImages(category)
        } catch (error) {
            setIsActive(true)
            setTitle("Error!")
            setText("Something wrong! Try later")
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
                        <input type="file" name="file" id="picture" onChange={e => getPreview(e.target.files[0])}/>
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
                    return (
                        <div className="portfolio-masonry-image-container" key={i}>
                            <img src="/delete-icon.png" alt="delete" id={images[item]} className="portfolio-masonry-delete" onClick={e => deleteImage(e.target.id)}/>
                            <img 
                                className='portfolio-masonry-img' 
                                src={`${process.env.REACT_APP_API_URL}static/images/portfolio/${category}/${images[item]}`} 
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