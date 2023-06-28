import { Container,Content } from "./styles"
import{AiOutlineClose} from "react-icons/ai"
import { Link,useNavigate} from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import Footer from "../Footer/index"
import Search from "../Search/index"
import { useSearch } from "../../hooks/Search"


export default function Menu({type,isMenuOpen,onMenuClose  }){
    const [isMenu, setIsMenu] = useState(isMenuOpen);
    const handleMenuClose = () => {
        setIsMenu(false);
        onMenuClose(false)
      };
    const {singOut}= useAuth()
    const navigate = useNavigate();

    function handlesingOut(){
        singOut()
        navigate("/")
    }
    if(type===1){
        return(
            isMenu && ( <Container>
            
                <header>
                <Link to="/">
                   <button onClick={handleMenuClose}>
                       <AiOutlineClose size={30} fill="white"/>
                       <p>Menu</p>
                   </button>
               </Link>
                </header>
                 <Content>
                 <Search />
                   <Link  to="/create">
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
           </Container>)
        )
    }
    return(
        isMenu && ( <Container>
            <header>
               <Link to="/">
                   <button onClick={handleMenuClose}>
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
       </Container>)
      
    )
}