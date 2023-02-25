import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t39.30808-6/326033527_710920120463127_5654615819075484949_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=34h4KwAS7Z4AX9wWtSL&_nc_ht=scontent.ffru2-1.fna&oh=00_AfCUVgW04nTRKIBFcnZBJpbmHLXUwUiDqyH2Tz6V_trjtg&oe=63FF275F"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t39.30808-6/305985412_982594162622576_329416400922042903_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=0WvA_XbkIn4AX8x6rpt&_nc_ht=scontent.ffru2-1.fna&oh=00_AfAAqdhrVuDhmXBlpv5gGObj_0OvVFO0iJKeD8-KvQaBLA&oe=63FEC86A"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t39.30808-6/278368910_721795695840203_918524291812816471_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=pkcSG2tQAcUAX9Ag2AF&_nc_ht=scontent.ffru2-1.fna&oh=00_AfBFaOq67ngZEbihwFbttZeBEKwxwSYlaRMZTXbuiQ7dkw&oe=63FED609"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t39.30808-6/307136255_989379745277351_8287547963801454642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=D5kjNRWUIYIAX99oJIF&_nc_oc=AQlJXt_zmN3kfT5Jyfbvzt9bKburIuNfdp8vG9w8ZiASCeP6aobd3DdJmfvznmvsdhQ&_nc_ht=scontent.ffru2-1.fna&oh=00_AfAM1CzD-D2N90IlyA1kssWSUka80EqvHfOA5t3rEQiLzw&oe=640021AA"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t39.30808-6/301143367_976802549868404_6343517376351291473_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=A34DI1M16X8AX-t4ul7&_nc_ht=scontent.ffru2-1.fna&oh=00_AfB_BLG54JcoQhANSnaPxlT2wXRDOUWnQUwNjDFYj9-SbQ&oe=63FE7761"
                        alt=""
                    />
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
