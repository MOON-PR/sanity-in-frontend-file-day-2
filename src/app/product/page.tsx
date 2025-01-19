"use client";

import React from "react";
import ProductPage from "../../components/ProductPage";
import Footer from "../../components/Footer";

const Product = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <ProductPage
          mainImage="/image 2.png"
          thumbnails={[
            "/image 2.png",
            "/image 5.png",
            "/image 6.png",
          ]}
        />
      </div>
      <Footer />
    </>
  );
};

export default Product;