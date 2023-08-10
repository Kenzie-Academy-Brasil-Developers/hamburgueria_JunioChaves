import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../components/Servises/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ProductCard } from "../../components/ProductCard";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [count, setCount] = useState(0);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const localCart = localStorage.getItem("@ProductsList");


  useEffect(() => {
    const getHandleProducts = async () => {
      try {
        setLoading(true);
        const { data } = await productsApi.get("/products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHandleProducts();
  }, []);

  const addCarts = (product) => {
    setCartList([...cartList, product]);
  };

  useEffect(() => {
    if (cartList.length > 0) {
      localStorage.setItem(localCart, JSON.stringify(cartList));
    }
  }, [cartList]);
  const removeLocalStore = () => {
    localStorage.removeItem("@ProductsList");
  };

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

  const resultSearch = productList.filter((product) =>
    product.name.toUpperCase().includes(value.toUpperCase())
  );

  return (
    <>
      <Header
        productList={productList}
        setValue={setValue}
        value={value}
        setIsOpen={setIsOpen}
        cartList={cartList}
        setCount={setCount}
      />
      <main>
        <ProductList
          resultSearch={resultSearch}
          productList={productList}
          addToCart={addToCart}
        />
        {isOpen ? (
          <CartModal
            cartList={cartList}
            setIsOpen={setIsOpen}
            removeFromCart={removeFromCart}
          />
        ) : null}

        <ToastContainer position="bottom-right" autoClose={3 * 1000} />
      </main>
    </>
  );
};
