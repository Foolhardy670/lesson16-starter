import mealsImage from "../../assets/meals.jpg";

import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./headerCartButton"


const Header = (props) => {
    return (
      <>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
      </>
    );
};

export default Header;