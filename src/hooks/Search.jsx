import { createContext,useContext,useState} from "react";


export const SearchContext= createContext()


function SearchProvider({children}){
    const [search, setSearch] = useState("");
    const [isMenuOpens, SetsMenuOpen] = useState("");

    function closeMenu(isMenuOpen){
        SetsMenuOpen(isMenuOpen)
    }

    return(
        <SearchContext.Provider value={{search, setSearch,closeMenu,isMenuOpens }}>
            {children}
        </SearchContext.Provider>
    )
}


function useSearch(){
    const context= useContext(SearchContext)
    return context
}


export {SearchProvider,useSearch}