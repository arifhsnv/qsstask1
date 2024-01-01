import { createContext } from "react";

const FavoriteContext = createContext({
  selection: [],
  filteredSelection: [],
  handleFilteredSector: (event) => {},
  allCountry: [],
  yearData: [],
  indicatorData: "",
  yearData: "",
});

export default FavoriteContext;
