import "./DrinkButtons.css";
import Button from "./ui/Button";

const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>
        Would You Like {drinkOne} or {drinkTwo}
      </h2>
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
export default DrinkButtons;
