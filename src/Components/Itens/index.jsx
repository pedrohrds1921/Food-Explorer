import { Container } from "./styles";
import {FiPlus, FiX} from "react-icons/fi"

export function Itens({isNew,value,onClick,onChage,key,...rest}){
    return(
        <Container isNew={ isNew}>
            <input 
            type="text"
            value={value}
            onChange={onChage}
            readOnly={!isNew} 
            key={key}
            {...rest} 
            />
            <button
            type="button"
            onClick={onClick}
        
            className= {isNew ? "btn-add":"btn-delete"}
            >
           {isNew ? <FiPlus/>:<FiX/>}   
            </button>
        </Container>


    )
}