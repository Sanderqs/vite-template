import "./App.css";
import DrinkButtons from "./components/DrinkButtons";
import { tea, coffee } from "./utils/data";
const App = () => {
  return <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />;
};
export default App;
