import Image from "next/image"

import logo from "../../../../public/images/Logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a href="/" className="footer-logo">
                    <Image src={logo} alt="logo"/>
                </a>
                <nav className="footer-nav">
                    <ul className="footer-nav-list">    
                        <li className="footer-nav-item">
                            <a href="/about" className="footer-nav-link links">About us</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/?element=services" className="footer-nav-link links">Services</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/portfolio?category=wardrobe" className="footer-nav-link links">Portfolio</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/?element=contacts" className="footer-nav-link links">Contacts</a>
                        </li>
                    </ul>
                </nav>
                <address className="footer-contacts">
                    <a href="tel:+(123) 456 7890" className="footer-contacts-item links">+(123) 456 7890</a>
                    <a href="mailto:futuradesign@gmail.com" className="footer-contacts-item links">futuradesign@gmail.com</a>
                    <span className="footer-contacts-item links">515, Wilson Ave, Brooklyn, New York</span>
                </address>
            </div>
        </footer>
    )   
}

export default Footer