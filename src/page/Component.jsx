import pic from '../assets/pic.png'
import ful from '../assets/full.png'

export default function Component() {
  return (
    <div>
      <img className='mt-10 w-[100%] h-[510px] absolute' src={pic} alt="" />
      <div className='relative top-[350px] flex-col left-[500px]'>
            <img src={ful}className=' ' alt="" />
            <button className=' bg-white h-[60px] w-[200px] font-bold text-[20px] rounded-[50px]' >Shop Now</button>
      </div>
     
    </div>
  )
}
