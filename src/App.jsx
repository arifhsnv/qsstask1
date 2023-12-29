import { useContext, useState } from "react";
import "./App.css";
import Selection from "./components/Selection.jsx";
import FavoriteContext from "./store/SectorContext.js";
import RankContainer from "./components/RankContainer.jsx";
function App() {
  const favCard = useContext(FavoriteContext);

  const [count, setCount] = useState(0);

  return (
    <>
      <FavoriteContext.Provider
        value={{
          selection: [],
          filteredSelection: [],
          handleFilteredSector: (event) => {},
        }}
      >
        <div className="container">
          <Selection />
          <RankContainer />
        </div>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
