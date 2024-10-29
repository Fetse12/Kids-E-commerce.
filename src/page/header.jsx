import Boy from "../pages/Boy";


export default function Header() {
  return (
    <div className="ml-[0px] flex justify-between  h-[79px] bg-white">
    <h2 className="text-[40px] font-bold">Ethio kids</h2>
      <div className=" text-[22px] mr-[500px]">
          <a className="ml-[60px]" href="">Home</a>
          <a className="ml-[60px]" href="">Girls</a>
          <a className="ml-[60px]" href={<Boy/>}>Boys</a>
          <a className="ml-[60px]" href="">Baby</a>
          <a className="ml-[60px]" href="">Contact Us</a>
      </div>
    
</div>
  )
}
