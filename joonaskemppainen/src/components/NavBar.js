import logoImage from "../resources/logo.png"
import { FaBars } from "react-icons/fa"
import { useState } from "react"

function NavBar() {
    const [showLinks, setShowLinks] = useState(false)

    const toggle = () => {
        setShowLinks(!showLinks)
    }

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <img src={logoImage} alt="logo" />
                </div>
                <nav className="navbar-link-container"  id={showLinks ? "hidden" : ""}>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <button className="nav-btn" onClick={toggle}>
                    <FaBars />
                </button>
            </div>
        </header>
    )
}

export default NavBar