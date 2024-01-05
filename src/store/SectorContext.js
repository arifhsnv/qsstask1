import { createContext, useState } from "react";
const FavoriteContext = createContext({
  selection: [],
  filteredSelection: [],
  handleFilteredSector: (event) => {},
  allCountry: [],
  yearData: [],
  indicatorData: [],
  yearData: [],
  selectedCountry: [],
  setSelectedCountry: () => {},
  initialDataCountry: [],
});

export default FavoriteContext;
