import Header from "./component/Layout/Header";
import { useState } from "react";
import Meals from "./component/Meals/Meals";
import Cart from "./component/cart/Cart";
import CartProvider from "./store/cartProvider";
const App = () => {
  const [cartShown, setCartShown] = useState(false);

  const ShownCartHandler = () => {
    setCartShown(true);
  };
  const HideCarthandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      {cartShown && <Cart onClose={HideCarthandler} />}
      <Header onShown={ShownCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
