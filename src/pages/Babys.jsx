import Header from "../page/header"
import newImage5 from '../assets/text5.png';
import Image3 from '../assets/kid.png';
import Image4 from '../assets/kid2.png';
import Nav from "../page/nav";
import Product_card from "../page/Product_card";
import Footer from "../page/footer";
import { productData } from '../data/data';

export default function Babys() {
  const babys = productData.filter(babyproduct => babyproduct.type === "baby");

  return (
    <>
        <Header/> 
        <div className="bg-[#E5A4FF] flex flex-col md:flex-row justify-between items-center h-[70vh] md:h-[770px]">
          <div className="mx-4 md:mx-20 mt-10 flex flex-col items-center md:items-start">
        <div className="hidden sm:block">
          <img src={newImage5} alt="" />
        </div>
        <div className='flex flex-col justify-start'>
          <img src={Image3} alt="" />
            <button className="bg-[#FBB7CD] h-[50px] w-[150px] rounded-[60px] text-white text-xl font-bold mt-4 sm:mt-10">
              Shop Now
            </button>
        </div>
          </div>
          <img className="mx-4 md:mr-20 z-10" src={Image4} alt="New Collection for Girls" />
        </div>
            <h2 className="text-[45px] font-bold ml-40 mt-9">Babys Collections</h2>
            <Nav/>
            <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-4 ml-[150px] mr-[150px]'>
                {babys.length > 0 ? (
                  babys.map(product => {
                    return <Product_card key={product._id} productData={product} />;
                  })
                ) : (
                  <p>No girls products available</p>
                )}
              </div>
            <Footer
              bgColor="bg-[#E5A4FF]" />
    </>
  )
}
