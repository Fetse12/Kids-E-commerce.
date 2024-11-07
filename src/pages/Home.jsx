import Header from "../page/header";          // Import Header component
import Scroll from "../page/Scroll";          // Import Scroll component
import Cards from "../page/cards";            // Import Cards component
import Product_card from "../page/Product_card"; // Import Product_card component
import Component from "../page/Component";    // Import Component component
import Fotter from "../page/Component2";      // Import Fotter component
import Footer from "../page/footer";           // Import Footer component
import { productData } from "../data/data";
export default function Home() {
  return (
    <>
   
    <Header/>
      <Scroll />
      <Cards />
      <div className="flex justify-center">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-4 xl:ml-[150px] xl:mr-[150px]'>
              {productData.length > 0 ? (
                productData.map(product => {
                  return <Product_card key={product._id} productData={product} />;
                })
              ) : (
                <p>No  products available</p>
              )}
            </div>
      </div>
     
      <Component />
      <Fotter />
      <Footer
      bgColor="bg-[#FCA5CA]"/>
    </>
  );
}