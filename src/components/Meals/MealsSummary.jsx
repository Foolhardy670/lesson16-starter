import classes from "./MealsSummary.module.css";

const MealsSummary = () =>{
    return (
      <section className={classes.summary}>
        <h2>Delicious food, Delivered to You </h2>
        <p>
          Choose your favorite meals form our board selection of meals and enjoy
          at lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    );

}

export default MealsSummary;