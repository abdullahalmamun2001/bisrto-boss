import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "./../../../assets/home/slide1.jpg"
import img2 from "./../../../assets/home/slide2.jpg"
import img3 from "./../../../assets/home/slide3.jpg"
import img4 from "./../../../assets/home/slide4.jpg"
import img5 from "./../../../assets/home/slide5.jpg"

const Category = () => {
    return (
        <div>
            <div>
            <hr className="h-10" />
                <h1 className="text-2xl text-center">---From 11:00am to 10:00pm---</h1>
                <h1 className="text-3xl text-center my-5">ORDER ONLINE</h1>
                <hr className="mt-10 w-50 mx-center mb-20" />
            </div>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper my-10"
        >
            <SwiperSlide><img src={img1} alt="" /><p className="text-cyan-700 text-center -mt-16 uppercase text-4xl">Salad</p></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /><p className="text-cyan-700 text-center -mt-16 uppercase text-4xl">Roast</p></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /><p className="text-cyan-700 text-center -mt-16 uppercase text-4xl">Ifter</p></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /><p className="text-cyan-700 text-center -mt-16 uppercase text-4xl">Food</p></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /><p className="text-cyan-700 text-center -mt-16 uppercase text-4xl">Fish</p></SwiperSlide>
           
        </Swiper>
        </div>
    );
};

export default Category;