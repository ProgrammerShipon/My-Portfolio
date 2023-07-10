import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";

import "./PSlider.css";

// import required modules
import {
	Pagination,
	Navigation,
	// FreeMode,
	// Scrollbar,
	// Mousewheel,
} from "swiper";

const PSlider = ({ PImg }) => {
	console.log("project image -> ", PImg);

	return (
		<Swiper
			// direction={"vertical"}
			// spaceBetween={30}
			pagination={{
				type: "progressbar",
				// clickable: true,
				// dynamicBullets: true,
			}}
			// slidesPerView={"auto"}
			// freeMode={true}
			// scrollbar={true}
			// mousewheel={true}
			navigation={true}
			modules={[Pagination, Navigation]}
			className="mySwiper"
		>
			{PImg &&
				PImg.map((img, i) => (
					<SwiperSlide key={i}>
						<img className=" w-full" src={img} />
					</SwiperSlide>
				))}
		</Swiper>
	);
};

export default PSlider;
