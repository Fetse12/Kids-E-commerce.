import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';

import Image3 from '../assets/kid.png';
import Image4 from '../assets/kid2.png';

import newImage from '../assets/text1.png';
import newImage2 from '../assets/text2.png';
import newImage3 from '../assets/text3.png';
import newImage4 from '../assets/text4.png';
import newImage5 from '../assets/text5.png';


export default function Scroll() {
  return (
    <div>
        <Swiper
      spaceBetween={50}
      modules={[Navigation,Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay:2000}}
      >
      <SwiperSlide>
          <div className="bg-[#FBB7CD] flex justify-between h-[770px]">
              <div className='ml-[200px] mt-[100px]'>
                  <img src={newImage5} alt="" />
                  <img src={newImage} alt="" />
                  <img src={newImage2} alt="" />
                  <button className='bg-[#B7D2FB] h-[50px] w-[150px] rounded-[60px] text-white text-xl font-bold'>Shop Now</button>
              </div>
                <img className='mr-[200px] z-10'  src={newImage3} alt="New Collection for Girls" />
                <img className='absolute right-0 -z-3' src={newImage4} alt="New Collection  for Girls" />

            </div>
     </SwiperSlide>
     <SwiperSlide>
          <div className="bg-[#B7D2FB] flex justify-between h-[770px]">
              <div className='ml-[200px] mt-[100px]'>
                  <img src={newImage5} alt="" />
                  <img src={Image1} alt="" />
                  <button className='bg-[#E5A4FF] h-[50px] w-[150px] rounded-[60px] text-white text-xl font-bold mt-[20px]'>Shop Now</button>
              </div>
                <img className='mr-[200px]' src={Image2} alt="New Collection for Boys" />
            </div>
     </SwiperSlide>
     <SwiperSlide>
          <div className="bg-[#E5A4FF] flex justify-between h-[770px] ">
              <div className='ml-[200px] mt-[100px]'>
                  <img src={newImage5} alt="" />
                  <img src={Image3} alt="" />
                  <button className='bg-[#FBB7CD] h-[50px] w-[150px] rounded-[60px] text-white text-xl font-bold mt-[20px]'>Shop Now</button>
              </div>
                <img className='mr-[200px]' src={Image4} alt="New Collection for Girls" />

            </div>
     </SwiperSlide>
     
     
    </Swiper>

    </div>
  );
}