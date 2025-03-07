import classes from "./MealItemForm.module.css";
import Input from "../../UI/input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultvalue: "1",
        }}
      />
      <button>+ add</button>
    </form>
  );
};

export default MealItemForm;
