
import { Container } from "./styles"
import {AiOutlineLeft} from "react-icons/ai"

export default function BackButton({fontSize,to}){
    return(
        <Container to={to} fontSize={fontSize}>
            <AiOutlineLeft fill="white"/>
        <p>Voltar</p>
        </Container>
    )
}