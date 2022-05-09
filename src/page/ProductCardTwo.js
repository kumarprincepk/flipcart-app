import React from 'react'
import img2 from  '../asset/mobile.jpeg';
import '../style/ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCardTwo() {
  return (
    <>
    <Link to="product">
         <div className="card">
        <img src={img2 } className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            Vu TVs at Best Price <br /> <span style={{color:"green"}}>From $1200</span><br /><span style={{color:"gray"}}> Best Picture & Sound Quality</span>
          </p>
        </div>
      </div>
      </Link>
    </>
  )
}
