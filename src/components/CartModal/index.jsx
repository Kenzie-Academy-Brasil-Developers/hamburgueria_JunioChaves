import { MdClose } from "react-icons/md";
import { CartItemCard } from "../CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({
  cartList,
  children,
  setIsOpen,
  removeFromCart,
  product,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.modal} role="dialog">
      <div className={style.container}>
        <div className={style.boxTitle}>
          <h2 className={style.h2}>Carrinho de compras</h2>
          <button
            className={style.close}
            onClick={() => closeModal()}
            aria-label="close"
            title="Fechar"
          >
            {children}
            <MdClose size={21} />
          </button>
        </div>
        <div className={style.box}>
          <ul className={style.ul}>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
            <div className={style.div}>
              <span className={style.line}></span>
              <div >
                <span className={style.total} >Total</span>
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className={style.remove}>
                <button
                  onClick={() => removeFromCart(product)}
                  className="btn lg"
                >
                  Remover todos
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
