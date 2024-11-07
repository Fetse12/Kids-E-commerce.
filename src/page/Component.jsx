import pic from '../assets/pic.png';
import ful from '../assets/full.png';


export default function Component() {
  return (
    <div className="relative ">
      <img
        className="mt-10 w-full h-auto md:h-[510px] object-cover"
        src={pic}
        alt="Main Image"
      /> 
      <div className="absolute lg:top-[350px] left-[50%] transform -translate-x-1/2 flex flex-col items-center ">
            <img
                className="w-[80%] md:w-auto" 
                src={ful}
                alt="Full Image"
            />
      <button className="bg-white h-[60px] w-[200px] font-bold text-[16px] sm:text-[18px] md:text-[20px] rounded-[50px] mt-4">
          Shop Now
        </button>
      </div>
    </div>
  );
}
