const ContactForm = ({formHandler, isActive}) => {
    
    return (
        <>
        <form className="contact-form" onSubmit={e => formHandler(e)}>
            <div className="contact-form-fields">
                <div className="contact-form-inputs">
                    <input type="text" className="contact-form-input" name="name" placeholder="Name" autoComplete="true"/>
                    <input type="email" className="contact-form-input" name="email" placeholder="Email" autoComplete="true"/>
                    <input type="tel" className="contact-form-input" name="phone" placeholder="Phone number (optional)" autoComplete="true"/>
                </div>
                <textarea name="message" className="contact-form-textarea" placeholder="Your message" maxLength={2000}></textarea>
            </div>
            <button type="submit" className="contact-form-button" disabled={isActive}>
                <span className="contact-form-button-text button-text">Submit</span>
                <span className="gray-decoration"></span>
                <span className="yellow-decoration">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="8" viewBox="0 0 24 8" fill="none">
                        <path d="M23.8536 4.35355C24.0488 4.15829 24.0488 3.84171 23.8536 3.64645L20.6716 0.464466C20.4763 0.269204 20.1597 0.269204 19.9645 0.464466C19.7692 0.659728 19.7692 0.976311 19.9645 1.17157L22.7929 4L19.9645 6.82843C19.7692 7.02369 19.7692 7.34027 19.9645 7.53553C20.1597 7.7308 20.4763 7.7308 20.6716 7.53553L23.8536 4.35355ZM0.5 4.5H23.5V3.5H0.5V4.5Z" fill="white"/>
                    </svg>
                </span>
            </button>
        </form>
        </>
    )
}

export default ContactForm