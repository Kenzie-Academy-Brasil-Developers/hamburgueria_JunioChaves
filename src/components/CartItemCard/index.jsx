import { MdDelete } from "react-icons/md";
import style from "./style.module.scss"

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <div className={style.boxDiv}>
         <li>
            <div className={style.box}>
            <div className={style.img}>
               <img src={product.img} alt={product.name} />
               <h3 className={style.nome}>{product.name}</h3>
            </div>
            <button onClick={() => removeFromCart(product.id)} aria-label="delete" title="Remover item">
               <MdDelete size={21} />
            </button>
            </div>
         </li>
      </div>
   );
};
