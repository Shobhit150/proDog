import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full pl-3">Popular product</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 pb-14 w-full justify-items-center">
        {products.map((product, index) => (
          <div key={index} className="border">
            <ProductCard key={index} product={product} />
          </div>
          
        ))}
      </div>

      <button onClick={() => { router.push('/all-products') }} className="px-12 py-2.5 cursor-pointer border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
