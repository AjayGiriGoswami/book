import React from "react";
import Cards from "../Compoment/Home/Cards";

const Product = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        
        </div>
      </div>
    </>
  );
};

export default Product;
