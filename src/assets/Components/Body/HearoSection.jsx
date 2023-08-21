import React,{ useEffect,useRef, useState } from 'react';
import {GetData} from '../Shared/ApiCrud'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
function HeroSection() {

    const [HeroSectionTitle, setHeroSection] = useState('');
    const [HeroSectionDiscription, setHeroSectionDiscription] = useState('');

    useEffect(() => {

        const GetHero = async () => {
            try {
        const { data } = await GetData('info')
        setHeroSection(data[0]?.HeroSectionTitle)
        setHeroSectionDiscription(data[0]?.HeroSectionDescription)
    
            }catch (error) {
                console.log(error.message)
                
            }

    
        }
        GetHero();
    
      }, [])
    return (
        <div className="md:columns-2 mt-28">
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>            <div className="flex flex-col md:ms-10">
                <div className="text-black text-4xl md:text-6xl font-bold font-serif">
                    {HeroSectionTitle} </div>
                <div className="text-2xl md:text-3xl mt-10">
                    {HeroSectionDiscription}
                </div>
            </div>
            <div className="md:w-2/2 md:pr-8 my-11 me-10">
               <img className='object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSat2oCai8c6IgkjLmyYTMz0OT5UYoQ9-rZJT-WKg8VeaHx-MCDAPfvvs3GWVpzAPaoyIM&usqp=CAU" alt="" />
            </div>

        </SwiperSlide>
        <SwiperSlide>            <div className="flex flex-col md:ms-10">
                <div className="text-black text-4xl md:text-6xl font-bold font-serif">
                    {HeroSectionTitle} </div>
                <div className="text-2xl md:text-3xl mt-10">
                    {HeroSectionDiscription}
                </div>
            </div>
            <div className="md:w-2/2 md:pr-8 my-11 me-10">
               <img className='w-full h-auto object-cover rounded-tr-full rounded-bl-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSat2oCai8c6IgkjLmyYTMz0OT5UYoQ9-rZJT-WKg8VeaHx-MCDAPfvvs3GWVpzAPaoyIM&usqp=CAU" alt="" />
            </div>

        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      );
}

export default HeroSection;