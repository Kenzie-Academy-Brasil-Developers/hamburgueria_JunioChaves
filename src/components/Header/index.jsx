import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"


export const Header = ({value, setValue}) => {

   return (
      <header className={style.header}>
         <div className={style.container}>
            <div className={style.logo}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
            </div>
            <div className={style.container}>
               <div>
               <button className="btn">
                  <MdShoppingCart size={21} />
                  <span>0</span>
               </button>
               <form>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
               </div>
            </div>
         </div>
      </header>
   );
};
