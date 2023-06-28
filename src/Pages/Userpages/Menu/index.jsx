import { Container,Content } from "./styles"
import{AiOutlineClose} from "react-icons/ai"
import { Link,useNavigate} from "react-router-dom"
import { useAuth } from "../../../hooks/auth"

import Footer from "../../../Components/Footer/index"
import Search from "../../../Components/Search/index"


export default function Menu(){
  
    const {singOut}= useAuth()
    const navigate = useNavigate();

    function handlesingOut(){
        singOut()
        navigate(-1)
    }
    return(
        <Container>
             <header>
                <Link to={-1}>
                    <button>
                        <AiOutlineClose size={30} fill="white"/>
                        <p>Menu</p>
                    </button>
                </Link>
             </header>
              <Content>
              <Search />
              <button onClick={handlesingOut}>
                    <p>Sair</p>
                </button>
              </Content>
              <Footer/>
        </Container>
      
    )
}