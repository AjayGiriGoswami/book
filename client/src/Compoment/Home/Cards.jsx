import React from "react";

const Cards = () => {
  return (
    <>
      <div className="bg-card dark:bg-card-foreground text-card-foreground dark:text-card p-4 rounded-lg shadow-md w-80">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1736049882~exp=1736053482~hmac=deda28e04bd6e7f7577011606b73f7551e9e2aca9af60c7bd176597c1bbe8e1f&w=740"
          alt="Product Image"
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Product Name</h3>
          <span className="text-primary font-semibold">$99.99</span>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center justify-between mb-4 text-black ">
          <button className="bg-accent text-accent-foreground hover:bg-accent/80 py-2 px-4 rounded-md w-1/2 mr-2">
            Add Wishlist
          </button>
          <button className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md w-1/2 ml-2">
            Buy Now
          </button>
        </div>
        <button className="bg-primary text-black text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md w-full">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Cards;
