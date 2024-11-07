export default function Nav() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 ml-0 md:ml-40">
      <div className="flex items-center gap-6">
        <a href="" className="relative group transition-transform duration-300 transform hover:-translate-y-1">
          Jenns
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="" className="relative group transition-transform duration-300 transform hover:-translate-y-1">
          T-Shirt
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="" className="relative group transition-transform duration-300 transform hover:-translate-y-1">
          Sweaters
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="" className="relative group transition-transform duration-300 transform hover:-translate-y-1">
          Pants
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="" className="relative group transition-transform duration-300 transform hover:-translate-y-1">
          Shoes
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="" className="relative group transition-transform duration-300 transform hover:-translate-y-1">
          Pijamas
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>

      <div className="block md:hidden">
        <button className="text-xl">
          <i className="fa fa-bars"></i> 
        </button>
      </div>
    </div>
  );
}
