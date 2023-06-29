import { 
  Container,
  Content,
  Wrapper,
  IngredientsArea,
  WrapperTxtarea,
  ButtonArea,
  InputName,
  InputPrice,
  InputImg
} from "./styles"
import Footer from "../../../Components/Footer"
import {Header} from "../../../Components/Header"
import InputImage from "../../../Components/InputImage"
import Input from "../../../Components/Input"
import { Itens } from "../../../Components/Itens"
import BackButton from "../../../Components/BackButton/index"
import {RiArrowDropDownLine}from "react-icons/ri"
import { useEffect, useState } from "react"
import { useParams,useNavigate} from "react-router-dom"
import { api } from "../../../services/api"


export function EditFood(){

const params=useParams()
const [food, setFood] = useState(null);
const [Name, setName] = useState('');
const [Category, setCategory] = useState('');
const [Price, setPrice] = useState('');
const [Description, setDescription] = useState('');
const [FoodImgFile, setFoodImgFile] = useState(null);
const [Ingredients,setIngredients]=useState([])
const [newIngredients,setNewIngredients]=useState()
const navigate=useNavigate()
function formatCurrency (inputValue) {
  const numericValue = inputValue.replace(/\D/g, '');
  const decimalValue = parseFloat(numericValue) / 100;
  const formattedValue = decimalValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedValue;
};
function handleRemoveIngredients(deleted){
  setIngredients(prevState=>prevState.filter(ingredient=>ingredient!==deleted))
}

function handleAddIngredients(){
  
  setIngredients(prevState=>[...prevState,newIngredients])
  setNewIngredients('')
}

const handleChange = (event) => {
  const inputValue = event.target.value;
  const formattedValue = formatCurrency(inputValue);
  setPrice(formattedValue);
};


async function handleRemove(){

  const confirme=window.confirm("Deseja realmente remover o prato ?")

  if(confirme){
    await api.delete(`foods/${params.id}`)
    alert("Prato deletado")
    navigate("/")
  }
}

async function handleFoodUpdate(){

  if(!Name||!Price||!Category || !Description||!Ingredients ){
    return alert("Preenchar todos os campos")
  }

await api.put(`/foods/${params.id}`,{
    Name,Price,Category,Description,Ingredients
  })


if(FoodImgFile){
  const fileUploadForm=new FormData()
  fileUploadForm.append("foodImage",FoodImgFile)
  await api.patch(`foods/foodImage/${params.id}`,fileUploadForm)
}

alert("Prato atualizado")

}


const handleFileChange = (file) => {
  setFoodImgFile(file)
};

useEffect(()=>{
  async function fetchFoods() {
      const response = await api.get(`/foods/show/${params.id}`);
      const [data]=response.data
      console.log(data)
      setFood(data)
      setName(data.Name)
      setCategory(data.Category);
      setPrice(data.Price);
      setDescription(data.Description);
      setIngredients(data.ingredientsFood)
    }
    fetchFoods();
},[])

    return(
        <Container>
            <Header type={1}/>
            {food && <Content>
            <BackButton  to={-1}fontSize={15}/>
                <h2>Editar Prato</h2>
              <form action="">
               <InputImg  title={'Selecione imagem para alterá-la'} onChange={handleFileChange} />
                <InputName 
                title="Nome" 
                value={Name}
                onChange={e=>setName(e.target.value)}
                type="text"/>
                <div className="selectContainer">
                    <p>Categoria</p>
                    <select id="Categoria"
                      defaultValue={Category}
                      onChange={e=>setCategory(e.target.value)}>
                      <option >Escolha uma Categoria</option>
                      <option value="Entrada">Entrada</option>
                      <option value="Prato Principal">Prato Principal</option>
                      <option value="Sobrimesa">Sobrimesa</option>
                      <option value="Bebidas">Bebidas</option>
                    </select>
                    <label htmlFor="Categoria">
                    <RiArrowDropDownLine size={40}/>
                    </label>
                </div>
                <Wrapper>
                  <p>Ingredientes</p>
                  <IngredientsArea>
                  {
                    Ingredients.map((ingredient,index)=>(
                      <Itens
                      key={index}
                      value={ingredient}
                      onClick={()=>handleRemoveIngredients(ingredient)}
                      />
                    ))
                  }
                 <Itens
                      isNew 
                      placeholder="Adicionar"
                      value={newIngredients}
                      onClick={handleAddIngredients}
                      onChage= {e=>setNewIngredients(e.target.value)}
                     />
                  </IngredientsArea>
                </Wrapper>
               <InputPrice
                className
                title="Preço" 
                value={Price}
                onChange={handleChange}
                type="text"
                />
            
                <WrapperTxtarea>
                  <label htmlFor="Descrição">Descrição</label>
                  <textarea 
                  name="" 
                  id="Descrição" 
                  value={Description}
                  onChange={e=>setDescription(e.target.value)}
                  />
                </WrapperTxtarea>
                <ButtonArea>
                <button onClick={handleRemove}type="button">Exclur Prato </button> 
                <button 
                onClick={handleFoodUpdate} 
                type="button">Salvar alterações</button>
                </ButtonArea>
              </form>
            </Content>}
            <Footer/>
        </Container>
)
}