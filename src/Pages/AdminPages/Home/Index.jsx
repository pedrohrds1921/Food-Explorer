import { Container,Content } from "./styles"
import { Header } from "../../../Components/Header"
import  CardUser from"../../../Components/CardUser"
import Footer from "../../../Components/Footer";
import pngeggImage from "../../../images/pngegg 1.png";
import pngeggImage2 from "../../../images/pngegg 2.png";
import { useEffect,useState } from "react";
import{api} from"../../../services/api"
import {useSearch} from "../../../hooks/Search.jsx"
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Slider from "../../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
export default function Home(){

    const [foods, setFoods] = useState([]);
    const{search,setSearch}=useSearch()
    const foodCategories = [
      { title: 'Entrada', foods: [] },
      { title: 'Prato Principal', foods: [] },
      { title: 'Sobrimesa', foods: [] },
      { title: 'Bebidas', foods: [] },
    ];
    const navigate=useNavigate()

    const isDesktop = useMediaQuery({
      query: '(min-width: 768px)'
    })

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
      }
  
      fetchFoods();
    }, []);

    return(
        <Container>
              <Header type={1}/>
              <Content>
                <div className="box">
                {isDesktop && (<img src={pngeggImage} alt="Pngegg 2" />)}
                { !isDesktop&& <img src={pngeggImage2} alt="Pngegg 2" />}
                    <div className="text">
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                    </div>
                </div>
                <section>
          {foods.map(category => (
            <div key={category.title}>
              <h2>{category.title}</h2>
             <Slider>
             {category.foods.map(food => (
               <SwiperSlide>
                  <CardUser 
                  key={food.id} 
                  type={1} 
                  data={food}
                  onClick={()=>handleDetails(food.id)}
                  />
               </SwiperSlide>
                ))} 
             </Slider>
            </div>
          ))}
        </section>
                
              </Content>
              <Footer/>
        </Container>
      
    )
}