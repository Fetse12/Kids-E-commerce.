
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Boy from './pages/Boy';
import Contact from './pages/contact';
import Baby from './pages/Babys';
import Girls from './pages/Girls';
import Cart from './pages/cart';

function App(){
  console.log("Rendering App component");
  return(
      <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Boy" element={<Boy />} />
              <Route path="/Baby" element={<Baby />} />
              <Route path="/Girls" element={<Girls />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </div>
    </Router>
      </>
  );

}
export default App