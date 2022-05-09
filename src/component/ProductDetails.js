import React from "react";
import Footer from "../page/Footer";
import NavbarAllPage from "../page/NavbarAllPage";
import NavbarTwo from "../page/NavbarTwo";
import ProductCard from "../page/ProductCard";
import ProductCardTwo from "../page/ProductCardTwo";
import ProductPage from "../page/ProductPage";
import ProductPageTwo from "../page/ProductPageTwo";
import SwiperMobile from "../page/SwiperMobile";
import SwiperTv from "../page/SwiperTv";
import NavbarEvery from "./NavbarEvery";

export default function ProductDetails() {
  return (
    <>
      <NavbarEvery />
      <NavbarAllPage />
      <div className="divpro">
        <ProductPage />
        <ProductPageTwo />
      </div>
      <div className="container my-3 ">
        <h2>
          <b>Related Product</b>
        </h2>
      </div>
      <SwiperMobile/>
      <div className="container my-3 ">
        <h2>
          <b>Related More Product</b>
        </h2>
      </div>
      <SwiperTv/>
      <div className="my-5">
        <Footer />
      </div>
    </>
  );
}
