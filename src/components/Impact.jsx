import image1 from "../assets/Screenshot 2024-10-18 at 3.12.54 PM.png";
import image2 from "../assets/Screenshot 2024-10-18 at 3.14.30 PM.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Impact = () => {
    return (
        <section className="impact d-flex flex-column gap-3 align-items-end w-100">
            <div className="head">Program Impact</div>
            <div className="swiper-container w-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        // Mobile (small screens)
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // Tablets
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        // Desktops and large screens
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src={image1} alt="Impact Slide" className="impact-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="Impact Slide" className="impact-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="Impact Slide" className="impact-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="Impact Slide" className="impact-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="Impact Slide" className="impact-image" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Impact;
