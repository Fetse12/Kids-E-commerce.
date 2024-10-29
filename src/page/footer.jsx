
export default function Footer() {
  return (
    <div className="bg-[#FCA5CA] h-[500px] mt-72 ">
      <div className="flex gap-32 justify-center">
        <h1 className="mt-28 text-4xl font-bold text-white">Ethio Kids</h1>
            <div className="flex flex-col mt-28 text-white">
                <h1 className="text-2xl">HELPFUL LINKS</h1>
                <a href="">Home</a>
                <a href="">Boys</a>
                <a href="">Girls</a>
                <a href="">Kids</a>
                <a href="">Contact Us</a>
            </div>
            <div className="flex flex-col mt-28 text-white">
            <h1 className="text-2xl">INFROMATION</h1>
                <a href="">About us</a>
                <a href="">Term and Condition</a>
                <a href="">Privacy Policy</a>
                <a href="">Customer Support</a>
            </div>
      </div>
      <div className="border-t-2 border-white w-4/5 mx-auto mb-2 mt-28"></div>
      <p className="flex justify-center text-white">© 2024 copyright All right reserved</p>
    </div>
  )
}
