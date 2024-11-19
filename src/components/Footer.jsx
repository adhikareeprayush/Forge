import forgeLogoWhite from "../assets/Images/Forge Logo White (2).png";


const Footer = () => {
    return (
        <section className="footer w-100 d-flex text-white">
            <div className="d-flex flex-column w-25 gap-2">
                <div className="footer-logo">
                    <img src={forgeLogoWhite} alt="" width={200} />
                </div>
                <span>
                    © 2024 Forge Innovation Ventures.
                    <br />
                    All rights reserved.
                </span>
            </div>
            <div className="d-flex flex-column w-25 gap-2">
                <span className="footer-head">
                    Get In Touch
                </span>
                <span>
                    Forge.Factory, G Floor, KCT Tech Park,
                    #3 Athipalayam Road, Chinnavedampatti,
                    Coimbatore 641049
                </span>
                <span>
                    info@forge-iv.co <br />
                    +91 94433 54312
                </span>
            </div>
            <div className="d-flex flex-column w-25 gap-2">
                <span className="footer-head">
                    Quick Links
                </span>
                <div className="d-flex flex-column gap-1">
                    <span>About FORGE</span>
                    <span>Disclaimer</span>
                    <span>Privacy Policy</span>
                    <span>Terms and Conditions</span>
                </div>
            </div>
            <div className="d-flex flex-column w-25 gap-2">
                <span className="footer-head">
                    Join Our Email List
                </span>
                <p>
                    Subscribe to our newsletter to get our news and details delivered to you
                </p>
                <div className="d-flex footer-input-container">
                    <input type="text" placeholder="Enter your email address" />
                    <button>Join</button>
                </div>
            </div>
        </section>
    )
}

export default Footer
