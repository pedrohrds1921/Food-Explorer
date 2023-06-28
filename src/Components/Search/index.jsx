
import {AiOutlineSearch} from"react-icons/ai"
import {Container} from"./styles.js"
import { useState } from "react"
import {useSearch} from "../../hooks/Search.jsx"

export default function Search(){
const{search,setSearch,closeMenu}=useSearch()

const handleSearchChange = (e) => {
  setSearch(e.target.value);
};

  return(
    <Container>
    <button><AiOutlineSearch size={30} /></button>
    <input type="text" 
    onChange={handleSearchChange}
    placeholder="Busque pelo nome do prato ou ingredientes"/>
  </Container>
  )
}