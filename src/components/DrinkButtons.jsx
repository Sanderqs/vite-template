import "./DrinkButtons.css";
import Button from "./ui/Button";

const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Would You Like Coffee or Tea</h2>
      <div className="button-group">
        <Button />
        <Button />
      </div>
    </>
  );
};
export default DrinkButtons;
