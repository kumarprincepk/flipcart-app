import React from "react";
import "../style/Navstyle.css";
import "tippy.js/themes/light.css";
import img4 from "../asset/img5.png";
import img5 from "../asset/img6.png";
import "../style/LoginTippy.css";
import NavbarTwo from "../page/NavbarTwo";
import Footer from "../page/Footer";
import NavbarEvery from "./NavbarEvery";
import SwiperTv from "../page/SwiperTv";
import SwiperMobile from "../page/SwiperMobile";
import ProductCardApi from "../page/ProductCardApi";
import NavbarAllPage from "../page/NavbarAllPage";

export default function Navbar() {
  return (
    <>
    {/* <ProductDetails/> */}
      <NavbarEvery />
      <NavbarTwo />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="	https://rukminim1.flixcart.com/flap/844/140/image/73e8c010cf38204e.jpg?q=50" className="d-block w-100 h-100 image" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/079319e6300fcabe.jpg?q=50" className="d-block w-100 h-50 image" />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/8978a649b62c025e.jpeg?q=50
" className="d-block w-100 h-50 image" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <nav class="navbar navbar-light bg-light justify-content-center">
        <div class="container-fluid justify-content-center">
          <a class="navbar-brand" href="#">
            <img src={img4} />
          </a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Exclusive Products</b></a> 
        <button class="btn btn-primary" type="submit">View All</button> 
  </div>
</nav>
    <ProductCardApi/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Exclusive Electronic</b></a> 
        <button class="btn btn-primary" type="submit">View All</button> 
  </div>
</nav>
     <SwiperTv/>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Exclusive Products</b></a> 
        <button class="btn btn-primary" type="submit">View All</button> 
  </div>
</nav>
    <ProductCardApi/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Exclusive Electronic</b></a> 
        <button class="btn btn-primary" type="submit">View All</button> 
  </div>
</nav>
      <SwiperMobile/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Exclusive Products</b></a> 
        <button class="btn btn-primary" type="submit">View All</button> 
  </div>
</nav>
    <ProductCardApi/>
      <nav class="navbar navbar-light bg-light ">
        <div class="container-fluid justify-content-center">
          <a class="navbar-brand" href="#">
            <img src={img5} width="1500" />
          </a>
        </div>
      </nav>
      <Footer />
    </>
  );
}
