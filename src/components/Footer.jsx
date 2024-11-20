import forgeLogoWhite from "../assets/Images/Forge Logo White (2).png";

const Footer = () => {
    return (
        <section className="footer w-100 text-white py-4 px-5">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Footer Logo and Copyright */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="footer-logo mb-3">
                            <img src={forgeLogoWhite} alt="Forge Logo" />
                        </div>
                        <span>
                            © 2024 Forge Innovation Ventures.
                            <br />
                            All rights reserved.
                        </span>
                    </div>

                    {/* Get in Touch Section */}
                    <div className="col-12 col-md-3 mb-4">
                        <span className="footer-head d-block mb-2">Get In Touch</span>
                        <span>
                            Forge.Factory, G Floor, KCT Tech Park,
                            <br />
                            #3 Athipalayam Road, Chinnavedampatti,
                            <br />
                            Coimbatore 641049
                        </span>
                        <br />
                        <span>
                            info@forge-iv.co <br />
                            +91 94433 54312
                        </span>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-12 col-md-3 mb-4">
                        <span className="footer-head d-block mb-2">Quick Links</span>
                        <div>
                            <span className="d-block">About FORGE</span>
                            <span className="d-block">Disclaimer</span>
                            <span className="d-block">Privacy Policy</span>
                            <span className="d-block">Terms and Conditions</span>
                        </div>
                    </div>

                    {/* Join Our Email List Section */}
                    <div className="col-12 col-md-3 mb-4">
                        <span className="footer-head d-block mb-2">Join Our Email List</span>
                        <p>Subscribe to our newsletter to get our news and details delivered to you</p>
                        <div className="d-flex footer-input-container">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Enter your email address"
                            />
                            <button className="btn btn-orange">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
