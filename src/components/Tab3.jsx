
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import labs01 from "../assets/labs-01.png"
import labs03 from "../assets/labs-03.png"
import "swiper/css/navigation";

import innoProduct from "../assets/Images/Product Innovation Labs.gif"
import indusRobo from "../assets/Images/Industrial Robotics & Cobotics.gif"
import electronicsDesign from "../assets/Images/Electronics Design Test & Verification.gif"



const Tab3 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-2 tab-3 d-flex flex-column align-items-center justify-between gap-4">
            <ul className="nav nav-tabs border-0  justify-content-start gap-5" id="myTab" role="tablist">
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
                        PRODUCT ADVISORY
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
                        PRODUCT DEVELOPMENT
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
                    <div className="d-flex flex-column align-items-center gap-2 w-100">
                        <div className="head text-uppercase d-flex flex-column align-items-center w-100 text-center">
                            <span className="">PRODUCT ADVISORY</span>
                            <h3 className="">Accelerating the Translation of Industrial Tech IPs into Commercial Products</h3>
                        </div>
                        <p className="text-center">
                            Forge offers a comprehensive range of services to support innovators and startups throughout their product development journey. In addition to providing expert guidance on product management practices, Forge also offers:
                        </p>
                        <div className="swiper-container w-100 position-relative p-5">
                            {/* Navigation Buttons */}
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

                            {/* Swiper Component */}
                            <Swiper
                                modules={[Navigation]} // Use the Navigation module
                                spaceBetween={100} // Space between slides
                                slidesPerView={1} // Ensure 3 slides are visible
                                navigation={{
                                    nextEl: ".swiper-button-next", // Link to custom next button
                                    prevEl: ".swiper-button-prev", // Link to custom prev button
                                }}
                                onSlideChange={() => console.log("slide change")}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {/* Slides */}
                                <SwiperSlide>
                                    <div className="d-flex align-items-center w-100 justify-content-between gap-5">
                                        <div className="d-flex w-50">
                                            <img src={indusRobo} alt="" style={{ width: "300px" }} />
                                        </div>
                                        <div className="flex-column d-flex gap-1">
                                            <h1 className="text-white text-bold">Defining the Right PRODUCT</h1>
                                            <p>Defining the Right PRODUCT is essentially about defining the Right Problem/Need, identifying the Right Customer and offering the Right Value Proposition. This ensures that the right product is built downstream, enabling a seamless adoption of the product by customers.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex align-items-center w-100 justify-content-between gap-5">
                                        <div className="d-flex w-50">
                                            <img src={innoProduct} alt="" style={{ width: "300px" }} />
                                        </div>
                                        <div className="flex-column d-flex gap-1">
                                            <h1 className="text-white text-bold">Defining the Right PRODUCT</h1>
                                            <p>Defining the Right PRODUCT is essentially about defining the Right Problem/Need, identifying the Right Customer and offering the Right Value Proposition. This ensures that the right product is built downstream, enabling a seamless adoption of the product by customers.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex align-items-center w-100 justify-content-between gap-5">
                                        <div className="d-flex w-50">
                                            <img src={indusRobo} alt="" style={{ width: "300px" }} />
                                        </div>
                                        <div className="flex-column d-flex gap-1">
                                            <h1 className="text-white text-bold">Defining the Right PRODUCT</h1>
                                            <p>Defining the Right PRODUCT is essentially about defining the Right Problem/Need, identifying the Right Customer and offering the Right Value Proposition. This ensures that the right product is built downstream, enabling a seamless adoption of the product by customers.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex align-items-center w-100 justify-content-between gap-5">
                                        <div className="d-flex w-50">
                                            <img src={innoProduct} alt="" style={{ width: "300px" }} />
                                        </div>
                                        <div className="flex-column d-flex gap-1">
                                            <h1 className="text-white text-bold">Defining the Right PRODUCT</h1>
                                            <p>Defining the Right PRODUCT is essentially about defining the Right Problem/Need, identifying the Right Customer and offering the Right Value Proposition. This ensures that the right product is built downstream, enabling a seamless adoption of the product by customers.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* Content for Tab 2 */}
                <div
                    className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-2 w-100">

                        <div className="head text-uppercase d-flex flex-column align-items-center w-100 text-center">
                            <span className="">PRODUCT DEVELOPMENT SUPPORT</span>
                            <h3 className="text-white">Accelerating the Translation of Industrial Tech IPs into Commercial Products</h3>
                        </div>
                        <p className="text-center">
                            Product Innovation Labs help startups, industrial companies, and student innovators with product design & development of industrial solutions. The Product Innovation Labs comprise of machineries & equipments in the following 8 Industrial Technology Domains:
                        </p>
                        <div className="w-100 d-flex col-12 justify-content-between">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <img src={indusRobo} alt="" width={100} />
                                <h4 className="text-yellow">Automation & Robotics</h4>
                                <p className="text-center">6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center">
                                <img src={innoProduct} alt="" width={100} />
                                <h4 className="text-yellow">Automation & Robotics</h4>
                                <p className="text-center">6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center">
                                <img src={electronicsDesign} alt="" width={100} />
                                <h4 className="text-yellow">Automation & Robotics</h4>
                                <p className="text-center">6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab3;
