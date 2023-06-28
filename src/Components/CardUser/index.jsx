import { Container,WrapperImg } from "./style"
import { useState } from "react";

import{AiOutlinePlus,AiOutlineMinus}from "react-icons/ai"
import { api } from "../../services/api";

export default function CardUser({data,type,onClick,...rest}){

  const FoodUrl= data.Food_Image ? `${api.defaults.baseURL}/files/${data.Food_Image}`:""
const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if(count <=0){
        return
    }
    setCount(count - 1);
  };

  if(type==1){
    return(
      <Container onClick={onClick} {...rest}>
      <WrapperImg>
      <img src={FoodUrl}alt=""/>
      </WrapperImg>
      <p>{data.Name}</p> 
      <span>{data.Price}</span>
  </Container>
    )
  }
    return(
        <Container onClick={onClick} {...rest}>
              <WrapperImg>
                <img src={FoodUrl}alt=""/>
              </WrapperImg>
              <p>{data.Name}</p> 
              <span>{data.Price}</span>
              <div className="Quanty">
                <button onClick={decrement}>
                <AiOutlineMinus size={30} fill="white"/>
                </button>
                <span>{count.toString().padStart(2,"0")}</span>
                <button onClick={increment}>
                <AiOutlinePlus size={30} fill="white"/>
                </button>
            </div>
            <button>incluir</button>
        </Container>

    )
}