import { useState } from "react";
import { Container } from "./styles";

import{AiOutlinePlus,AiOutlineMinus}from "react-icons/ai"

export function Count(){
const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count <=0){
        return
    }
    setCount(count - 1);
}
    return(
    <Container>
        <button onClick={decrement}>
        <AiOutlineMinus size={30} fill="white"/>
        </button>
        <span>{count.toString().padStart(2,"0")}</span>
        <button onClick={increment}>
        <AiOutlinePlus size={30} fill="white"/>
        </button>
    </Container>
    )
  }


