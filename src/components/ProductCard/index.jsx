import { useState } from "react"
import style from "./style.module.scss"
export const ProductCard = ({ product, addToCart }) => {
       
    return (
      <li key={product.id} className={style.container}>
        <div className={style.img}>
          <img src={product.img} alt={product.name} />
        </div>
        <div className={style.box}>
          <h3 className={style.h3}>{product.name}</h3>
          <span className={style.category}>{product.category}</span>
          <span className={style.price}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button className={style.button} onClick={() => addToCart(product)}>
            Adicionar
          </button>
        </div>
      </li>
    );
}