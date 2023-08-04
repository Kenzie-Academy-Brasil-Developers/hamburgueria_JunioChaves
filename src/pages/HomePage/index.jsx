import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../components/Servises/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ProductCard } from "../../components/ProductList/ProductCard";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  
  const [value, setValue] = useState("")

  const localCart = localStorage.getItem("@ProductsList");

  // useEffect montagem - carrega os produtos da API e joga em productList
  useEffect(() => {
    const getHandleProducts = async () => {
      try {
        setLoading(true);
        const { data } = await productsApi.get("/products");
        setProductList(data);
      } catch (error) {
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHandleProducts();
  }, []);

  // useEffect atualização - salva os produtos no localStorage (carregar no estado)

  const addCarts = (product) => {
    setCartList([...cartList, product]);
  };

  useEffect(() => {
    if (cartList.length > 0) {
      console.log(cartList);
      localStorage.setItem(localCart, JSON.stringify(cartList));
    }
  }, [cartList]);
  const removeLocalStore = () => {
    localStorage.removeItem("@ProductsList");
  };

  // adição, exclusão, e exclusão geral do carrinho
  //
  const addToCart = (product) => {
    if (!cartList.some((productCart) => productCart.id === product.id)) {
      setCartList([...cartList, product]);
      toast.success("O seu produto foi adicionado com sucesso.");
    } else {
      toast.success("O seu produto ja está no carrinho.");
    }
  };

  const removeFromCart = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
    toast.success("O seu produto foi removido com sucesso do carrinho.");
  };

  // renderizações condições e o estado para exibir ou não o carrinho



  // filtro de busca
   const resultSearch = productList.filter((product) =>
    product.name.toUpperCase().includes(value.toUpperCase())
    
  );
  
  return (
    <>
      <Header productList={productList} setValue={setValue} value={value}/>
      <main>
            <ProductList resultSearch={resultSearch}
            productList={productList}
            addToCart={addToCart}
            />
        <CartModal cartList={cartList} />

        <ToastContainer position="bottom-right" autoClose={3 * 1000} />
      </main>
    </>
  );
};

