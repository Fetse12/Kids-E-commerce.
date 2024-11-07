import Header from "../page/header";
import newImage from '../assets/text1.png';
import newImage2 from '../assets/text2.png';
import newImage3 from '../assets/text3.png';
import newImage4 from '../assets/text4.png'; 
import newImage5 from '../assets/text5.png';
import Nav from "../page/nav";
import Product_card from "../page/Product_card";
import Footer from "../page/footer";
import { productData } from '../data/data';


export default function Girls() {
  const girls = productData.filter(girlproduct => girlproduct.type === "girl");
  return (
    <div>
      <Header />
      <div className="bg-[#FBB7CD] flex flex-col md:flex-row justify-between items-center h-[70vh] md:h-[770px]">
    <div className="mx-4 md:mx-20 mt-10 flex flex-col items-center md:items-start">
      
      <div className="hidden sm:block">
        <img src={newImage5} alt="" />
        <img src={newImage2} alt="" />
      </div>
      <div className='flex flex-col justify-start'>
          <img className="" src={newImage} alt="" />
          <button className=" bg-[#B7D2FB] h-[50px] w-[150px] rounded-[60px] text-white text-xl font-bold mt-4 sm:mt-10">
            Shop Now
          </button>
        
      </div>
      
    </div>
    <img className="mx-4 md:mr-20 z-10" src={newImage3} alt="New Collection for Girls" />
  </div>
      <h2 className="text-[25px] font-bold ml-40 mt-9 md:text-[45px] sm:text-[35px] flex justify-start">Girls Collections</h2>
      <Nav />
      <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-4 ml-[150px] mr-[150px]'>
       
        </div>

        <div className="flex justify-center">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-4 xl:ml-[150px] xl:mr-[150px]'>
              {girls.length > 0 ? (
                girls.map(product => {
                  return <Product_card key={product._id} productData={product} />;
                })
              ) : (
                <p>No girls products available</p>
              )}
            </div>
      </div>

      <Footer bgColor="bg-[#FCA5CA]" />
    </div>
  );
}

