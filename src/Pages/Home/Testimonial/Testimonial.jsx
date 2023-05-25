import { useEffect, useState } from "react";
// import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <div>
                <hr className="h-10" />
                <h1 className="text-2xl text-center">--- What About say client ---</h1>
                <h1 className="text-3xl text-center my-5">Textimonials</h1>
                <hr className="mt-10 w-50 mx-center mb-20" />
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="w-9/12 my-10 mx-auto mySwiper">

                {
                    review.map(singleData => <SwiperSlide key={singleData._id}><div className="w-9/12 mx-auto">
                        <Rating className="mx-auto my-10"
                            style={{ maxWidth: 180 }}
                            value={singleData.rating}
                            readOnly
                        />
                        <p>{singleData.details}</p>
                        <h1 className="text-2xl text-yellow-300">{singleData.name}</h1>
                    </div>
                    </SwiperSlide>)
                }


            </Swiper>

        </div>
    );
};

export default Testimonial;