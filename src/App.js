import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import ProductDetails from './component/ProductDetails';
import Order from './component/Order';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="product" element={<ProductDetails />} />
           <Route path='order' element={<Order/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
