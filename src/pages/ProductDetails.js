import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const detailProduct = products.find((item) => item.id === parseInt(id));

  if (!detailProduct) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-500">Loading or Product Not Found...</div>
      </div>
    );
  }

  const handleCart = (detailProduct, redirect) => {
    console.log(detailProduct);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === detailProduct.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === detailProduct.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, { ...detailProduct, quantity: 1 }]));
    }
    alert("Product added to cart");
    if (redirect) {
      navigate("/cart");
    }
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden min-h-screen">
      <div className="container px-5 py-24 mx-auto mt-20">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-between ">
          <img alt="ecommerce" className=" lg:w-[360px] md:w-[200px] sm:w-[200px] xs:w-[100px] h-auto " src={detailProduct.image} />
          <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-6">
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-4">{detailProduct.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-6">{detailProduct.title}</h1>

            <p className="leading-relaxed">{detailProduct.description}</p>
            <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                <span className="text-sm">$</span> {detailProduct.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => handleCart(detailProduct)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
