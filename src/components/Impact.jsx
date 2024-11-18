import image1 from "../assets/Screenshot 2024-10-18 at 3.12.54 PM.png"
import image2 from "../assets/Screenshot 2024-10-18 at 3.14.30 PM.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Impact = () => {
    return (
        <section className="impact d-flex flex-column gap-3 align-items-end w-100">
            <div className="head">Program Impact</div>
            <div className="swiper-container w-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src={image1} alt="" style={{ width: "400px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="" style={{ width: "400px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="" style={{ width: "400px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="" style={{ width: "400px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt="" style={{ width: "400px" }} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Impact
