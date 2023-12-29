import { createContext } from "react";

const FavoriteContext = createContext({
  selection: [],
  filteredSelection: [],
  handleFilteredSector: (event) => {},
});

export default FavoriteContext;
