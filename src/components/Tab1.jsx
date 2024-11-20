import forgeLogoFill from "../assets/Images/FORGE Logo (2) (1).png";
import forgeLogoWhite from "../assets/Images/Forge Logo White (2).png";
import fortLogoFill from "../assets/Images/FORT Logo.png";
import fortLogoWhite from "../assets/Images/FORT Logo White.png";
import innoLogoWhite from "../assets/Images/iNNOVATETN Logo White 2022-04.png";
import innoLogoFill from "../assets/Images/InnovateTN Logo (2) (1).png";
import forgefactory from "../assets/Images/FORGE Map.png";
import fortMap from "../assets/Images/FORT Map.png";
import innovateMap from "../assets/Images/InnovateTN Map.png";
import img1 from "../assets/Images/Image 35.png";
import img2 from "../assets/Images/Image 36.png";
import img3 from "../assets/Images/Image 37.png";
import img4 from "../assets/Images/Image 38.png";

import { useState } from "react";

const Tab1 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="tab-1 py-5">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="head">
                    Forge’s Network of <br /> Industrial Innovation Labs
                </h2>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs justify-content-center gap-md-5 gap-sm-4 mb-4 border-0" id="myTab" role="tablist">
                {/* Tab 1 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 0 ? "active" : ""}`}
                        type="button"
                        role="tab"
                        onClick={() => handleTabChange(0)}
                    >
                        <img
                            src={activeTab === 0 ? forgeLogoWhite : forgeLogoFill}
                            alt="Forge Logo"
                            className="img-fluid"
                        />
                    </button>
                </li>
                {/* Tab 2 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                        type="button"
                        role="tab"
                        onClick={() => handleTabChange(1)}
                    >
                        <img
                            src={activeTab === 1 ? fortLogoWhite : fortLogoFill}
                            alt="Fort Logo"
                            className="img-fluid"
                        />
                    </button>
                </li>
                {/* Tab 3 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                        type="button"
                        role="tab"
                        onClick={() => handleTabChange(2)}
                    >
                        <img
                            src={activeTab === 2 ? innoLogoWhite : innoLogoFill}
                            alt="InnovateTN Logo"
                            className="img-fluid"
                            style={{ mixBlendMode: activeTab !== 2 ? "multiply" : "normal" }}
                        />
                    </button>
                </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {/* Tab 1 Content */}
                <div className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}>
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-6">
                            <h3 className="head">HWjunction @ HQ, Forge</h3>
                            <p>
                                Housed at Forge.Factory - Forge’s headquarters in Coimbatore, TN’s
                                foremost industrial hub, the HWjunction is an MIT Accredited Digital
                                Fabrication Lab offering digital manufacturing technology through
                                industrial-grade fabrication and flexible computer-controlled tools.
                            </p>
                            <button className="btn btn-primary">Get In Touch</button>
                        </div>
                        <div className="col-12 col-lg-6">

                            <img src={forgefactory} alt="Forge Factory" className="img-fluid" />
                        </div>
                    </div>
                </div>

                {/* Tab 2 Content */}
                <div className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}>
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-6">
                            <h3 className="head">Force of Rapid Transformation - SIPCOT Industrial Innovation Centres</h3>
                            <p>
                                The FORTs (Force of Rapid Transformation) serve as world-class Open Industrial Innovation Ecosystems, offering comprehensive deep technical infrastructure, services and resources to seed, nurture, and accelerate the development of technologically advanced innovations into industrial-grade solutions ready for deployment at scale, and into commercially viable products, thereby creating a deep impact to both the technology and manufacturing sectors in Tamil Nadu simultaneously.
                            </p>
                            <button className="btn btn-primary">Get In Touch</button>
                        </div>
                        <div className="col-12 col-lg-6 position-relative">
                            <img src={fortMap} alt="Fort Map" className="img-fluid" />
                        </div>
                    </div>
                </div>

                {/* Tab 3 Content */}
                <div className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}>
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-6">
                            <h3 className="head">InnovateTN</h3>
                            <p>
                                IThe InnovateTN labs across 4 cities in TN operate as self-contained Integrated Industrial Innovation Labs, creating a robust innovation ecosystem in and around these industrial hubs. by leveraging an Open Innovation Model for government, MSMEs, technology providers, academia, R&D, innovators & startup entrepreneurs, investors, and incubators to collaborate and co-create industry-oriented cutting-edge technology solutions
                            </p>
                            <button className="btn btn-primary">Get In Touch</button>
                        </div>
                        <div className="col-12 col-lg-6 position-relative tab-1-3">

                            <img src={innovateMap} alt="InnovateTN Map" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tab1;
