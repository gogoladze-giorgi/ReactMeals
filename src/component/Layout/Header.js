import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsPhoto from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShown={props.onShown} />
      </header>
      <div className={classes.main_image}>
        <img src={mealsPhoto} alt="table of meals" />
      </div>
    </Fragment>
  );
};
export default Header;
