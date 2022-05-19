import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  
  const [appMode , setMode] = useState(false);

  const appClass = appMode ? "App dark" : "App light"

  const toggleMode = () => {
    return setMode((appMode) => !appMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
