import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import {Autoplay, Pagination } from "swiper";
import { MissionData } from "@/data/mission-critical";
import ImageComponent from "@/components/common/ImageComponent";
const MissionCritical = () => {
  return (
    <section className='bg-white py-10 lg:py-24'>
        <div className="container">
        <h2 className='h3 font-bold max-w-[436px] mb-8 lg:mb-[4.5rem]'>We love to take on mission‑critical problems
in need of solutions for world</h2>

<Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        className="mySwiper missionSlider"
      >
        {
            MissionData.map((item,i)=>
        <SwiperSlide key={i} className="max-w-[938px]">
            <div className="flex md:flex-row flex-col gap-7">
            <ImageComponent src={item.img} width={565} height={595} alt="slider-images" figClassName="flex justify-center relative"/>
            <span className="absolute text-[4rem] lg:text-[6rem] top-12 left-5 font-bold fontStyle">{`0${i+1}`}</span>
            <div className="md:w-[40%]">
                <h3 className="h3 font-bold relative after:content-[''] after:absolute after:w-[30%] after:md:w-[60%] after:h-[3px] after:bg-black-100 after:-top-1 after:left-0">{item.titlt}</h3>
                <span className='text-black'>{item.description}</span>
            </div>
            </div>
        </SwiperSlide>


        )}
      </Swiper>
</div>
    </section>
  )
}

export default MissionCritical