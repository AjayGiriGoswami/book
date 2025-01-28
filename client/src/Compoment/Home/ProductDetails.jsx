import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Product Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
    price: "$99.99",
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1736049882~exp=1736053482~hmac=deda28e04bd6e7f7577011606b73f7551e9e2aca9af60c7bd176597c1bbe8e1f&w=740",
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Related Product 1",
      price: "$39.99",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1736049882~exp=1736053482~hmac=deda28e04bd6e7f7577011606b73f7551e9e2aca9af60c7bd176597c1bbe8e1f&w=740",
    },
    {
      id: 3,
      name: "Related Product 2",
      price: "$29.99",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1736049882~exp=1736053482~hmac=deda28e04bd6e7f7577011606b73f7551e9e2aca9af60c7bd176597c1bbe8e1f&w=740",
    },
    {
      id: 4,
      name: "Related Product 3",
      price: "$19.99",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1736049882~exp=1736053482~hmac=deda28e04bd6e7f7577011606b73f7551e9e2aca9af60c7bd176597c1bbe8e1f&w=740",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-700 mt-2">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <div className="flex space-x-4 mt-6 mb-7 justify-between">
            <button className="bg-green-500 w-full text-white py-2 px-4 rounded hover:bg-green-600">
              Add to Wishlist
            </button>
            <button className="bg-green-500 w-full text-white py-2 px-4 rounded hover:bg-green-600">
              Buy Now
            </button>
          </div>
          <button className="bg-blue-500 w-full text-white py-3 px-4 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-4 text-center">
        {relatedProducts.map((relatedProduct) => (
          <div
            key={relatedProduct.id}
            className=" rounded-lg p-4 shadow-md"
          >
            <img
              src={relatedProduct.imageUrl}
              alt={relatedProduct.name}
              className="w-full h-auto object-fill rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">
              {relatedProduct.name}
            </h3>
            <p className="text-gray-700">{relatedProduct.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
              <Link  to="/data">View Product</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
