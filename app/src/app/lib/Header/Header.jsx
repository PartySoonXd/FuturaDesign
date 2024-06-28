import Image from "next/image"
import { useState } from "react"

import logo from "../../../../public/images/Logo.svg"

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <header className="header">
            <div className={`header-hamburger ${isActive && "active"}`} onClick={() => setIsActive(!isActive)}>
                <span className="header-hamburger-element"></span>
                <span className="header-hamburger-element"></span>
                <span className="header-hamburger-element"></span>
            </div>
            <nav className="header-nav">
                <ul className="header-nav-items">
                    <li className="header-nav-item">
                        <a href="/about" className="header-nav-item__link links">About us</a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/?element=services" className="header-nav-item__link links">Services</a>
                    </li>
                </ul>
                <a href="/" className="header-nav-logo">
                    <Image src={logo} alt="logo"/>
                </a>
                <ul className="header-nav-items">
                    <li className="header-nav-item">
                        <a href="/portfolio?category=wardrobe" className="header-nav-item__link links">Portfolio</a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/?element=contacts" className="header-nav-item__link links">Contacts</a>
                    </li>
                </ul>
            </nav>
            <nav className="header-nav-mobile">
                <a href="/" className="header-nav-logo">
                        <Image src={logo} alt="logo"/>
                </a>
                <div className={`header-nav-items-container ${isActive && "active"}`} onClick={() => setIsActive(!isActive)}>
                    <ul className={`header-nav-items mobile ${isActive && "active"}`} onClick={(e) => e.stopPropagation()}>
                        <li className="header-nav-item mobile">
                            <a href="/about" className="header-nav-item__link mobile links">About us</a>
                        </li>
                        <li className="header-nav-item mobile">
                            <a href="/?element=services" className="header-nav-item__link mobile links">Services</a>
                        </li>
                        <li className="header-nav-item mobile">
                            <a href="/portfolio?category=wardrobe" className="header-nav-item__link mobile links">Portfolio</a>
                        </li>
                        <li className="header-nav-item mobile">
                            <a href="/?element=contacts" className="header-nav-item__link mobile links">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header