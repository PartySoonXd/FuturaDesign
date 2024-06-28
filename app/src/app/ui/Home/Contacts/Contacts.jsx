import axios from "axios";
import { useRef, useState } from "react";

import ContactForm from "./ContactForm"
import { Notification } from "@/app/lib/Notification/Notification";

const Contacts = ({element}) => {
    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const ref = useRef()

    if (element === "contacts") {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const formHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        await axios.post("/api/feedback/send", formData).then(data => {
            setTitle("Success")
            setText(data.data.message)
            setIsActive(true)
        }).catch(error => {
            setTitle("Error")
            setText(error.response.data.error)
            setIsActive(true)
        })
    }
    if (isActive) {
        setTimeout(() => {
            setIsActive(false)
        }, 3000)
    }
    return (
        <>
        <Notification isActive={isActive} title={title} text={text}/>
        <div className="contacts" ref={ref}>
            <div className="container">
                <div className="contacts-container">
                    <h2 className="contacts-title h2">Contacts</h2>
                    <h3 className="contacts-subtitle h3">Get in touch with us</h3>
                    <ContactForm formHandler={formHandler} isActive={isActive}/>
                    <div className="contacts-our-contacts">
                        <h3 className="contacts-subtitle h3">Our contacts</h3>
                        <a className="contacts-our-contacts-text button-text" href="tel:+(123) 456 7890">Phone: <span>+(123) 456 7890</span></a>
                        <a className="contacts-our-contacts-text button-text" href="mailto:futuradesign@gmail.com">Email: <span>futuradesign@gmail.com</span></a>
                        <p className="contacts-our-contacts-text button-text">Address: <span>515, Wilson Ave, Brooklyn, New York</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contacts