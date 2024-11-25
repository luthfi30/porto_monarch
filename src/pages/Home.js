import React, { useContext } from "react";

//import product context
import { ProductContext } from "../contexts/ProductContext";
//import product component
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);

  const allProducts = products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing" || product.category === "jewelery");

  return (
    <div className="min-h-screen mt-10">
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {allProducts.length > 0 ? (
              allProducts.map((product) => {
                return <Product key={product.id} product={product} />;
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

export default Home;
