import "./App.css";
import DrinkButtons from "./components/DrinkButtons";
import DrinkChoise from "./components/DrinkChoise";
import { tea, coffee } from "./utils/data";
const App = () => {
  const greeting = "Welcome to our cafe!";
  const userDrink = coffee;
  return (
    <>
      <div className="app">
        <h1>{greeting}</h1>
        <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        <DrinkChoise drink={userDrink} />
      </div>
    </>
  );
};
export default App;
