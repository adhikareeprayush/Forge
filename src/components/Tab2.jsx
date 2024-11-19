
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
import acceleratedSys from "../assets/Images/Accelerated Computing Systems.gif"
import cyberPhysical from "../assets/Images/Cyber Physical Control System.gif"
import additiveDesign from "../assets/Images/Additive Manufacturing.gif"
import electroRapid from "../assets/Images/Electronics Rapid Prototyping.gif"


const Tab1 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-2 d-flex flex-column align-items-center justify-between gap-4">
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
                        PRODUCT <br /> INNOVATION LABS
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
                        PRODUCT <br /> COMPLIANCE LABS
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
                        PILOT <br /> PRODUCTION FACILITIES
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
                            <span className="">Product innovation labs</span>
                            <h3 className="">Product Design & Development</h3>
                        </div>
                        <p className="text-center">
                            Product Innovation Labs help startups, industrial companies, and student innovators with product design & development of industrial solutions. The Product Innovation Labs comprise of machineries & equipments in the following 8 Industrial Technology Domains:
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
                                slidesPerView={3} // Ensure 3 slides are visible
                                navigation={{
                                    nextEl: ".swiper-button-next", // Link to custom next button
                                    prevEl: ".swiper-button-prev", // Link to custom prev button
                                }}
                                onSlideChange={() => console.log("slide change")}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {/* Slides */}
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-start">
                                        <img src={indusRobo} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={innoProduct} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={electronicsDesign} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={acceleratedSys} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={cyberPhysical} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={additiveDesign} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={electroRapid} alt="" width={280} />
                                        <h4 className="text-dark-orange">Automation & Robotics</h4>
                                        <p>6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
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
                            <span className="">Product innovation labs</span>
                            <h3 className="">Product Design & Development</h3>
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
                {/* Content for Tab 3 */}
                <div
                    className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-2 w-100">

                        <div className="head text-uppercase d-flex flex-column align-items-center w-100 text-center">
                            <span className="">Pilot Production Facilities</span>
                            <h3 className="">Low Volume Production of Hardware Products & Industrial Systems</h3>
                        </div>
                        <p className="text-center">
                            Pilot Production Facilities offer plug & play manufacturing setups tailored for startups and MSMEs working on new product innovations. They bridge the gap between prototyping and large-scale manufacturing, enabling startups to transform into the next generation of industrial tech majors by offering them pilot-scale manufacturing infrastructure & capabilities that drive production while these startups navigate the market stage, to arrive at a Minimum Viable Product, and optimise unit economics & Product-Factory Fit.
                        </p>

                        <div className="w-100 d-flex col-12 justify-content-between">
                            <div className="col-6 d-flex flex-column align-items-center">
                                <img src={indusRobo} alt="" width={100} />
                                <h4 className="text-yellow">Automation & Robotics</h4>
                                <p className="text-center">6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center">
                                <img src={innoProduct} alt="" width={100} />
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

export default Tab1;
