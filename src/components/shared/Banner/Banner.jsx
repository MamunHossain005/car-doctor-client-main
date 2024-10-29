import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

import img1 from "../../../assets/images/images/banner/1.jpg"
import img2 from "../../../assets/images/images/banner/2.jpg"
import img3 from "../../../assets/images/images/banner/3.jpg"
import img4 from "../../../assets/images/images/banner/4.jpg"
import img5 from "../../../assets/images/images/banner/5.jpg"
import img6 from "../../../assets/images/images/banner/6.jpg"

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={img1} alt="" className='absolute z-0'/>
                        <div className='w-full h-full bg-gradient-to-r from-gray-800/90 absolute z-40'></div>
                        <div className='absolute z-50 text-white max-w-lg ps-16 mt-[165px]'>
                            <h1 className='capitalize text-6xl font-bold'>Affordable price for car servicing</h1>
                            <p className='capitalize mt-14'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4 mt-5'>
                                <button className='btn btn-outline btn-info'>Discover More</button>
                                <button className='btn btn-outline btn-warning'>Latest Project</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" className='absolute z-0'/>
                    <div className='w-full h-full bg-gradient-to-r from-gray-800/90 absolute z-40'></div>
                        <div className='absolute z-50 text-white max-w-lg ps-16 mt-[165px]'>
                            <h1 className='capitalize text-6xl font-bold'>Affordable price for car servicing</h1>
                            <p className='capitalize mt-14'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4 mt-5'>
                                <button className='btn btn-outline btn-info'>Discover More</button>
                                <button className='btn btn-outline btn-warning'>Latest Project</button>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" className='absolute z-0'/>
                    <div className='w-full h-full bg-gradient-to-r from-gray-800/90 absolute z-40'></div>
                        <div className='absolute z-50 text-white max-w-lg ps-16 mt-[165px]'>
                            <h1 className='capitalize text-6xl font-bold'>Affordable price for car servicing</h1>
                            <p className='capitalize mt-14'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4 mt-5'>
                                <button className='btn btn-outline btn-info'>Discover More</button>
                                <button className='btn btn-outline btn-warning'>Latest Project</button>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" className='absolute z-0'/>
                    <div className='w-full h-full bg-gradient-to-r from-gray-800/90 absolute z-40'></div>
                        <div className='absolute z-50 text-white max-w-lg ps-16 mt-[165px]'>
                            <h1 className='capitalize text-6xl font-bold'>Affordable price for car servicing</h1>
                            <p className='capitalize mt-14'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4 mt-5'>
                                <button className='btn btn-outline btn-info'>Discover More</button>
                                <button className='btn btn-outline btn-warning'>Latest Project</button>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" className='absolute z-0'/>
                    <div className='w-full h-full bg-gradient-to-r from-gray-800/90 absolute z-40'></div>
                        <div className='absolute z-50 text-white max-w-lg ps-16 mt-[165px]'>
                            <h1 className='capitalize text-6xl font-bold'>Affordable price for car servicing</h1>
                            <p className='capitalize mt-14'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4 mt-5'>
                                <button className='btn btn-outline btn-info'>Discover More</button>
                                <button className='btn btn-outline btn-warning'>Latest Project</button>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" className='absolute z-0'/>
                    <div className='w-full h-full bg-gradient-to-r from-gray-800/90 absolute z-40'></div>
                        <div className='absolute z-50 text-white max-w-lg ps-16 mt-[165px]'>
                            <h1 className='capitalize text-6xl font-bold'>Affordable price for car servicing</h1>
                            <p className='capitalize mt-14'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4 mt-5'>
                                <button className='btn btn-outline btn-info'>Discover More</button>
                                <button className='btn btn-outline btn-warning'>Latest Project</button>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;