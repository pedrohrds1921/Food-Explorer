import { Container,Content,WrapperImg } from "./styles"
import { Header } from "../../../Components/Header"
import Footer from "../../../Components/Footer"
import {AiOutlineLeft} from"react-icons/ai"
import{Ingredients} from "../../../Components/Ingredients"
import {Count} from "../../../Components/Count/index"
import {MdOutlineReceipt} from "react-icons/md"
import { api } from "../../../services/api"
import {Loading} from"../../../Components/loading"
import { useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react"

export default function FoodDetails(){
    const [food,setFood]=useState(null)
    const [foodUrl,setFoodUrl]=useState()
    const navigate = useNavigate()
    const params = useParams();
    const [load,setLoad]=useState(false)
    
  
    useEffect(()=>{
        async function fetchFoods() {
            const response = await api.get(`/foods/show/${params.id}`);
            const [data]=response.data
         
            setFood(data)
            setFoodUrl(data.Food_Image ? `${api.defaults.baseURL}/files/${data.Food_Image}`:"") 
            setLoad(true)
          }
          fetchFoods();
    },[])
    

    return(
        <Container>
              <Header/>
                {!load &&  <Loading/>}
                {food &&  <Content>
                <button onClick={()=>navigate(-1)}>
                    <AiOutlineLeft  size={30} fill="white"/> 
                    <p>Voltar</p>
                </button>
                <WrapperImg>
                 <img src={foodUrl} alt=""/>
                 </WrapperImg>
    
                <h2>{food.Name}</h2>
                <p>{food.Description}</p>
                <Ingredients ingredientsData={food.ingredientsFood} />
                <div className="Checkout">
                    <Count/>
                    <button>
                        <MdOutlineReceipt size={30} fill="white"/>
                        pedir.
                        <span>{food.Price}</span>
                    </button>
                </div>
              </Content>}
              <Footer/>
        </Container>
      
    )
}