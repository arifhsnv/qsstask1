import { createContext } from "react";

const FavoriteContext = createContext({
    selection: [],
    filteredSelection:[]
})

export default FavoriteContext