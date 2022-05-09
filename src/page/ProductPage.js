import React,{useState} from "react";
import img from "../asset/mobile.jpeg";
import img2 from "../asset/tv.jpeg";
import img3 from "../asset/pikacu.jpeg";
import img4 from "../asset/table.jpeg";
import '../style/ProductPage.css';

export default function ProductPage() {
    const [src,setSrc]=useState(img);
  

  return (
    <div>
 <div className="first">
     <div className="first_1">
         <img src={img} alt="" width="80" onMouseOver={()=>setSrc(img)}/>
         <img src={img2} alt="" width="80" onMouseOver={()=>setSrc(img2)}/>
         <img src={img3} alt="" width="80" onMouseOver={()=>setSrc(img3)}/>
         <img src={img4} alt="" width="80" onMouseOver={()=>setSrc(img4)}/>
         <img src={img3} alt="" width="80" onMouseOver={()=>setSrc(img3)}/>
         <img src={img4} alt="" width="80" onMouseOver={()=>setSrc(img4)}/>
     </div>
     <div className="first_2">
         <img src={src} alt="" />
     </div>
 </div>
 <div className="container my-5">
 <button className="butt btn1"><i class="fa-solid fa-cart-plus"></i> ADD TO CART</button>
 <button className="butt btn2"><i class="fa-solid fa-cart-shopping"></i> ORDER IT</button>
 </div>
    </div>
  );
}
