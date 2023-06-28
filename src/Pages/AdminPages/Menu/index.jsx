import { Container,Content } from "./styles"
import{AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks/auth"


import Footer from "../../../Components/Footer"
import Search from "../../../Components/Search"

export default function Menu(){

    const {singOut}= useAuth()
   

    function handlesingOut(){
        singOut()
    }
    return(
        <Container>
            
             <header>
             <Link to="/">
                <button>
                    <AiOutlineClose size={30} fill="white"/>
                    <p>Menu</p>
                </button>
            </Link>
             </header>
              <Content>
              <Search />
                <Link to="/create">
                <button >
                    <p>Novo Prato</p>
                </button>
                </Link>
                <Link>
                <button onClick={handlesingOut}>
                    <p>Sair</p>
                </button>
                </Link>
             
              </Content>
              <Footer/>
        </Container>
      
    )
}