import { useState } from "react";
import "./App.css";
import DrinkButtons from "./components/DrinkButtons";
import DrinkChoise from "./components/DrinkChoise";
import { tea, coffee } from "./utils/data";
const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();
  return (
    <>
      <div className="app">
        {userDrink ? (
          ""
        ) : (
          <>
            <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
            <h1>{greeting}</h1>
          </>
        )}
        {userDrink && <DrinkChoise drink={userDrink} />}
      </div>
    </>
  );
};
export default App;
