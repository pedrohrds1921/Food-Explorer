import { Container,Content } from "./styles"
import  {Header} from"../../../Components/Header/index"
import  CardUser from "../../../Components/CardUser/index"
import Footer from "../../../Components/Footer"
import pngeggImage from "../../../images/pngegg 2.png";
import { useState,useEffect } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import {Loading} from"../../../Components/loading"
import {useSearch} from "../../../hooks/Search.jsx"

export default function Home(){
    const{search,setSearch}=useSearch()
    const [foods, setFoods] = useState([]);
    const [load,setLoad]=useState(false)
    const navigate=useNavigate()
    const foodCategories = [
      { title: 'Entrada', foods: [] },
      { title: 'Prato Principal', foods: [] },
      { title: 'Sobrimesa', foods: [] },
      { title: 'Bebidas', foods: [] },

    ];

    function handleDetails(id){
      navigate(`/details/${id}`)
    }
   
    useEffect(() => {
      async function fetchFoods() {
        const response = await api.get(`/foods?search=${search}`);
        const fetchedFoods = response.data;
        const updatedCategories = foodCategories.map(category => {
          const categoryFoods = fetchedFoods.filter(food => food.Category === category.title);
          return { ...category, foods: categoryFoods };
        });
        setFoods(updatedCategories);
        setLoad(true)
     
      }
      
      fetchFoods();
    }, [search]);

    useEffect(() => {
      async function fetchFoods() {
        const response = await api.get('/foods');
        const fetchedFoods = response.data;
        const updatedCategories = foodCategories.map(category => {
          const categoryFoods = fetchedFoods.filter(food => food.Category === category.title);
          return { ...category, foods: categoryFoods };
        });
        setFoods(updatedCategories);
        setLoad(true)
     
      }
      fetchFoods();
    }, []);
    return(
        <Container>
              <Header/>
              <Content>
              {!load &&  <Loading/>}
                <div className="box">
                <img src={pngeggImage} alt="Pngegg 2" />
                    <div className="text">
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </div>
                </div>
                <section>
          {foods.map(category => (
            <div key={category.title}>
              <h2>{category.title}</h2>
              <div className="Foods">
                {category.foods.map(food => (
                  <CardUser key={food.id} data={food} onClick={()=>handleDetails(food.id)} />
                ))}
              </div>
            </div>
          ))}
        </section>
              </Content>
              <Footer/>
        </Container>
      
    )
}