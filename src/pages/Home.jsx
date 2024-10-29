import Header from "../page/header";          // Import Header component
import Scroll from "../page/Scroll";          // Import Scroll component
import Cards from "../page/cards";            // Import Cards component
import Product_card from "../page/Product_card"; // Import Product_card component
import Component from "../page/Component";    // Import Component component
import Fotter from "../page/Component2";      // Import Fotter component
import Footer from "../page/footer";           // Import Footer component

export default function Home() {
  return (
    <>
      <Header />
      <Scroll />
      <Cards />
      <Product_card />
      <Component />
      <Fotter />
      <Footer />
    </>
  );
}