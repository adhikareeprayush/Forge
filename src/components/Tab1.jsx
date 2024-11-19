import forgeLogoFill from "../assets/Images/FORGE Logo (2) (1).png";
import forgeLogoWhite from "../assets/Images/Forge Logo White (2).png";
import fortLogoFill from "../assets/Images/FORT Logo.png";
import fortLogoWhite from "../assets/Images/FORT Logo White.png";
import innoLogoWhite from "../assets/Images/iNNOVATETN Logo White 2022-04.png"
import innoLogoFill from "../assets/Images/InnovateTN Logo (2) (1).png"
import forgefactory from "../assets/Images/FORGE Map.png"
import fortMap from "../assets/Images/FORT Map.png"
import innovateMap from "../assets/Images/InnovateTN Map.png"


import { useState } from "react";

const Tab1 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="tab-1 d-flex flex-column align-items-center justify-between gap-4">
            <div className="head">Forge’s Network of <br /> Industrial Innovation Labs</div>
            <ul className="nav nav-tabs border-0  justify-content-between" id="myTab" role="tablist">
                {/* Tab 1 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 0 ? "active" : ""}`}
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected={activeTab === 0}
                        onClick={() => handleTabChange(0)}
                    >
                        <img src={activeTab === 0 ? forgeLogoWhite : forgeLogoFill} alt="Forge Logo" />
                    </button>
                </li>
                {/* Tab 2 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected={activeTab === 1}
                        onClick={() => handleTabChange(1)}
                    >
                        <img src={activeTab === 1 ? fortLogoWhite : fortLogoFill} alt="Fort Logo" />
                    </button>
                </li>
                {/* Tab 3 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected={activeTab === 2}
                        onClick={() => handleTabChange(2)}
                    >
                        <img src={activeTab === 2 ? innoLogoWhite : innoLogoFill} alt="Default Logo"
                            //blend mode: multiply if activeTab is 2
                            style={{ mixBlendMode: activeTab !== 2 ? "multiply" : "normal" }}
                        />
                    </button>
                </li>
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
                {/* Content for Tab 1 */}
                <div
                    className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-start gap-2 w-50">
                        <div className="head ">
                            HWjunction @ HQ, Forge
                        </div>
                        <p>Housed at Forge.Factory - Forge’s headquarters in Coimbatore, TN’s foremost industrial hub, the HWjunction is an MIT Accredited Digital Fabrication Lab offering digital manufacturing technology through industrial-grade fabrication and flexible computer controlled tools.

                            HWjunction offers a comprehensive suite of infra, facilities and services including coworking spaces & product innovation labs aimed at accelerating hardware and tech innovation, and creating enterprises that harness hardware, software, and computing technologies to solve real-world problems, drive economic growth, and deliver social impact. It can concurrently support the industrial-grade prototyping of 12-15 product innovations simultaneously and has the room to expand concurrent capacity to an additional 10-15 product innovations.</p>
                        <button className="btn btn">Get In Touch</button>
                    </div>
                    <img src={forgefactory} alt="" />
                </div>
                {/* Content for Tab 2 */}
                <div
                    className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-start gap-2 w-50">
                        <div className="head ">
                            HWjunction @ HQ, Forge
                        </div>
                        <p>Housed at Forge.Factory - Forge’s headquarters in Coimbatore, TN’s foremost industrial hub, the HWjunction is an MIT Accredited Digital Fabrication Lab offering digital manufacturing technology through industrial-grade fabrication and flexible computer controlled tools.

                            HWjunction offers a comprehensive suite of infra, facilities and services including coworking spaces & product innovation labs aimed at accelerating hardware and tech innovation, and creating enterprises that harness hardware, software, and computing technologies to solve real-world problems, drive economic growth, and deliver social impact. It can concurrently support the industrial-grade prototyping of 12-15 product innovations simultaneously and has the room to expand concurrent capacity to an additional 10-15 product innovations.</p>
                        <button className="btn btn">Get In Touch</button>
                    </div>
                    <img src={fortMap} alt="" />
                </div>
                {/* Content for Tab 3 */}
                <div
                    className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-start gap-2 w-50">
                        <div className="head ">
                            HWjunction @ HQ, Forge
                        </div>
                        <p>Housed at Forge.Factory - Forge’s headquarters in Coimbatore, TN’s foremost industrial hub, the HWjunction is an MIT Accredited Digital Fabrication Lab offering digital manufacturing technology through industrial-grade fabrication and flexible computer controlled tools.

                            HWjunction offers a comprehensive suite of infra, facilities and services including coworking spaces & product innovation labs aimed at accelerating hardware and tech innovation, and creating enterprises that harness hardware, software, and computing technologies to solve real-world problems, drive economic growth, and deliver social impact. It can concurrently support the industrial-grade prototyping of 12-15 product innovations simultaneously and has the room to expand concurrent capacity to an additional 10-15 product innovations.</p>
                        <button className="btn btn">Get In Touch</button>
                    </div>
                    <img src={innovateMap} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Tab1;
