import { useState } from "react";
import { ProductCard } from "./ProductCard";

// Produtos da lista do carrinho
export const ProductList = ({ addToCart, resultSearch }) => {
  return (
     <div>
           <ul>
              {resultSearch.map((product) => (
                 <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                 />
              ))}
           </ul>
     </div>
  );
};
