import React, { useContext } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";
//import product component
import Product from "../components/Product";
import Hero from "../components/Hero";
const WomenProducts = () => {
  const { products } = useContext(ProductContext);

  const allProducts = products.filter((item) => item.category === "women's clothing" || item.category === "jewelery");
  return (
    <div className="min-h-screen mt-10">
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {allProducts.length > 0 ? (
              allProducts.map((item) => {
                return <Product key={item.id} product={item} />;
              })
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenProducts;
