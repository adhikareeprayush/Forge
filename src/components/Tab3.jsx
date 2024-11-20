import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import labs01 from "../assets/labs-01.png";
import labs03 from "../assets/labs-03.png";
import innoProduct from "../assets/Images/Product Innovation Labs.gif";
import indusRobo from "../assets/Images/Industrial Robotics & Cobotics.gif";
import electronicsDesign from "../assets/Images/Electronics Design Test & Verification.gif";

const Tab3 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-2 tab-3 d-flex flex-column align-items-center justify-content-between gap-4">
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs border-0 justify-content-start gap-3 gap-md-5" id="myTab" role="tablist">
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
                        PRODUCT ADVISORY
                    </button>
                </li>
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
                        PRODUCT DEVELOPMENT
                    </button>
                </li>
            </ul>

            {/* Tabs Content */}
            <div className="tab-content mt-4" id="myTabContent">
                {/* Tab 1 Content */}
                <div
                    className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-4 w-100 px-3">
                        <div className="text-center">
                            <h3 className="text-uppercase d-block">PRODUCT ADVISORY</h3>
                            <h3>Accelerating the Translation of Industrial Tech IPs into Commercial Products</h3>
                        </div>
                        <p className="text-center">
                            Forge offers a comprehensive range of services to support innovators and startups throughout their product development journey. In addition to providing expert guidance on product management practices, Forge also offers:
                        </p>
                        <div className="swiper-container w-100 position-relative">
                            <button
                                className="swiper-button-prev position-absolute top-50 start-0 translate-middle-y text-white border-0 bg-transparent"
                                style={{ left: "-30px", zIndex: 10 }}
                            >
                            </button>
                            <button
                                className="swiper-button-next position-absolute top-50 end-0 translate-middle-y text-white border-0 bg-transparent"
                                style={{ right: "-30px", zIndex: 10 }}
                            >
                            </button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >
                                {[indusRobo, innoProduct, electronicsDesign].map((imgSrc, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="row w-100 align-items-center">
                                            <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
                                                <img src={imgSrc} alt={`Slide ${index + 1}`} className="img-fluid" style={{ maxWidth: "300px" }} />
                                            </div>
                                            <div className="col-12 col-md-6 d-flex flex-column gap-3">
                                                <h1 className="text-white">Defining the Right PRODUCT</h1>
                                                <p>
                                                    Defining the Right PRODUCT is essentially about defining the Right Problem/Need, identifying the Right Customer, and offering the Right Value Proposition. This ensures that the right product is built downstream, enabling seamless adoption by customers.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* Tab 2 Content */}
                <div
                    className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-4 w-100 px-3">
                        <div className="text-center">
                            <h3 className="text-uppercase d-block">PRODUCT DEVELOPMENT SUPPORT</h3>
                            <h3 className="text-white">Accelerating the Translation of Industrial Tech IPs into Commercial Products</h3>
                        </div>
                        <p className="text-center">
                            Product Innovation Labs help startups, industrial companies, and student innovators with product design & development of industrial solutions. The Product Innovation Labs comprise of machineries & equipment in the following 8 Industrial Technology Domains:
                        </p>
                        <div className="row w-100">
                            {[indusRobo, innoProduct, electronicsDesign].map((imgSrc, index) => (
                                <div key={index} className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                    <img src={imgSrc} alt={`Feature ${index + 1}`} className="img-fluid" width={100} />
                                    <h4 className="text-yellow mt-3 text-center">Automation & Robotics</h4>
                                    <p className="text-center">
                                        6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab3;
