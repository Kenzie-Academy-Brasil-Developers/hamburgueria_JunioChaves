import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"


export const Header = ({ value, setValue, setIsOpen, cartList }) => {
   const openModal = () => {
      setIsOpen(true)
   }
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.flexbox}>
               <div className={style.logo}>
                  <img src={Logo} alt="Logo Kenzie Burguer" />
                  <button className={style.carrinho} onClick={() => openModal()}>
                     <MdShoppingCart size={21} />
                     <span className={style.span}>{cartList.length}</span>
                  </button>
               </div>
               <div className={style.container}>
                  <div>
                     <form>
                        <input placeholder="Digite sua pesquisa"
                           type="text"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit" onClick={(e)=> e.preventDefault()}>
                           <MdSearch size={21} />
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

      </header>
   );
};
