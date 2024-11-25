import React from "react";
// import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from "react-icons/bs";

const Product = ({ product }) => {
  const { id, title, image, price, category } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img src={image} alt={id} className="max-h-[220px] group-hover:scale-110 transition duration-300" />
          </div>
        </div>
        {/* button */}
        <div className="absolute top-6 right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <Link to={`/product/${id}`} className="w-12 h-12 bg-red-500 flex justify-center items-center text-primary drop-shadow-xl">
            <BsEyeFill style={{ color: "white" }} />
          </Link>
        </div>
      </div>
      {/* info */}
      <div>
        <div className="font-semibold ">
          <p className="text-xs text-gray-400 mb-2">{category}</p>
          <p className="text-gray-500">{title}</p>
        </div>
        <div className="flex items-baseline justify-between mt-2 mb-2 text-red-600">${price} </div>
      </div>
    </div>
  );
};

export default Product;
