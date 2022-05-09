import React from "react";
import img from '../asset/tv.jpeg';
import '../style/ProductCard.css';
import { Link } from "react-router-dom";



export default function ProductCard() {
  return (
    <>
    <Link to="product">
      <div className="card">
        <img src={img } className="card-img-top" />
        <div className="card-body" style={{textDecoration: 'none'}}>
          <p className="card-text" style={{textDecoration: 'none'}}>
            Vu TVs at Best Price <br /> <span style={{color:"green"}}>From $1200</span><br /><span style={{color:"gray"}}> Best Picture & Sound Quality</span>
          </p>
        </div>
      </div>
      </Link>
    </>
  );
}
