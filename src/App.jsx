import { useContext, useState } from "react";
import "./App.css";
import Selection from "./components/Selection.jsx";
import FavoriteContext from "./store/SectorContext.js";
import CountryDetailsContainer from "./components/CountryDetailsContainer.jsx";
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
          flagsForCountry: [],
          allCountry: [],
          yearData: [],
          indicatorData: [],
          yearData: [],
          selectedCountry: [],
          setSelectedCountry: () => {},
          initialDataCountry: [],
        }}
      >
        <div className="container">
          <Selection />
          <CountryDetailsContainer />
        </div>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
