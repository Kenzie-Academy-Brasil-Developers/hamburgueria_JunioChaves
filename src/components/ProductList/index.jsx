import { ProductCard } from "../ProductCard";
import style from "./style.module.scss"
export const ProductList = ({ addToCart, resultSearch }) => {
  return (
     <div>
           <ul className={style.container}>
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
