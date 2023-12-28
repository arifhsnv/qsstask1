import { useContext, useState } from "react";
import "./App.css";
import Selection from "./components/Selection.jsx";
import FavoriteContext from "./store/SectorContext.js";
function App() {
  const favCard = useContext(FavoriteContext);

  const [count, setCount] = useState(0);

  return (
    <>
      <FavoriteContext.Provider
        value={{ selection: [], filteredSelection: [] }}
      >
        <div className="container">
          <Selection />
        </div>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
