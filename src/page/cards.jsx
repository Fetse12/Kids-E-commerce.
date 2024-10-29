import Image4 from '../assets/kid2.png';
import Image2 from '../assets/image2.png';
import newImage3 from '../assets/text3.png';

import baby from '../assets/Baby.png';
import boy from '../assets/Boys.png';
import girl from '../assets/Girls.png';


export default function Cards() {
  return (
    <div>
             <div className='flex  ml-[250px] mr-[250px] mt-[70px] gap-4 justify-center'>

            <div className='bg-[#FBB7CD] relative flex justify-end w-[400px] '>
                    <img className='absolute  top-11 left-2 h-[90px] w-[230px] mt-[30px] ml-[30px]'  src={girl} alt="" />
                    <img className=' h-[250px] ' src={newImage3} alt="" />

            </div>
            <div className='bg-[#B7D2FB] relative flex justify-end w-[400px]'>
                    <img className='absolute  top-11 left-2 w-[230px] h-[90px] mt-[30px] ml-[30px]'  src={boy} alt="" />
                    <img className='h-[250px]' src= {Image2} alt="" />

            </div>
            <div className='bg-[#E5A4FF] relative flex justify-end w-[400px]'>
                <img className='absolute top-11 left-2 h-[90px] w-[230px] mt-[30px] ml-[30px]' src={baby} alt="" />
                <img className='h-[250px]' src={Image4} alt="" />

            </div>
            </div>

         <h2 className='flex justify-center text-[50px] font-bold mt-[20px]'>New  Collection </h2>
    </div>
   
  )
}
