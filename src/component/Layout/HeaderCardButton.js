import classes from "./HeaderCardButton.module.css";
import CartIcon from "../cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Cart from "../cart/Cart";
const HeaderCardButtom = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShown}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeaderCardButtom;
