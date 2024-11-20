import logo from "../assets/Images/navlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="d-flex align-items-center justify-content-between px-md-5 py-md-4 px-3 py-4 w-100">
            <div className="d-flex align-items-center gap-3">
                <img src={logo} alt="" className="logo" />
                <div className="logo-text">
                    <span className="text-orange">FORGE.</span>LABS
                </div>
            </div>
            <ul className="nav-menus d-flex align-items-center gap-3">
                <a
                    className="nav-link active"
                    href="#technical_infrastructure"
                    onClick={() => setIsOpen(false)} // Close the mobile menu
                >
                    TECHNICAL INFRASTRUCTURE
                </a>
                <a
                    className="nav-link"
                    href="#acceleration"
                    onClick={() => setIsOpen(false)} // Close the mobile menu
                >
                    PRODUCT ACCELERATION
                </a>
                <button className="btn btn-orange" onClick={() => setIsOpen(false)}>
                    Contact
                </button>
            </ul>
            {/* Hamburger menu */}
            <RxHamburgerMenu
                className="hamburger-menu"
                onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu visibility
            />
            {isOpen && (
                <div className={`mobile-menu ${isOpen ? "show" : "hide"}`}>
                    <ul className="d-flex flex-column gap-3">
                        <a
                            className="nav-link active"
                            href="#technical_infrastructure"
                            onClick={() => setIsOpen(false)} // Close the mobile menu
                        >
                            TECHNICAL INFRASTRUCTURE
                        </a>
                        <a
                            className="nav-link"
                            href="#acceleration"
                            onClick={() => setIsOpen(false)} // Close the mobile menu
                        >
                            PRODUCT ACCELERATION
                        </a>
                        <button className="btn btn-orange" onClick={() => setIsOpen(false)}>
                            Contact
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
