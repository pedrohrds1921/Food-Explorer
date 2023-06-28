import { Container,Content, WrapperImg } from "./styles"
import { Header } from "../../../Components/Header"
import Footer from "../../../Components/Footer"
import {AiOutlineLeft} from"react-icons/ai"
import{Ingredients} from "../../../Components/Ingredients"
import { api } from "../../../services/api"

import { useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react"


export default function FoodDetails(){
const [food,setFood]=useState(null)
const [foodUrl,setFoodUrl]=useState()
const navigate = useNavigate()
const params = useParams();

function handleEdit(id){
    navigate(`/edit/${id}`)
  }
useEffect(()=>{
    async function fetchFoods() {
        const response = await api.get(`/foods/show/${params.id}`);
        const [data]=response.data
        console.log(data)
        setFood(data)
        setFoodUrl(data.Food_Image ? `${api.defaults.baseURL}/files/${data.Food_Image}`:"") 
      }
      fetchFoods();
},[])



    return(
        <Container>
              <Header type={1}/>
                {food &&
                <Content>
                <button  onClick={()=>navigate(-1)}>
                    <AiOutlineLeft  size={30} fill="white"/> 
                    <p>Voltar</p>
                </button>
                <WrapperImg>
                 <img src={foodUrl} alt=""/>
                 </WrapperImg>
                <h2>{food.Name}</h2>
                <p>{food.Description}</p>
                <Ingredients ingredientsData={food.ingredientsFood} />
           
                <button  onClick={()=>handleEdit(food.id)}className="Edit">Editar prato</button>

              </Content>}
              <Footer/>
        </Container>
      
    )
}