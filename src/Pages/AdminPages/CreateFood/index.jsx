import { Container,Content,IngredientsArea,Wrapper,WrapperTxtarea} from "./styles"
import Footer from "../../../Components/Footer"
import {api} from"../../../services/api"
import {Header} from "../../../Components/Header"
import InputImage from "../../../Components/InputImage"
import Input from "../../../Components/Input"
import { Itens } from "../../../Components/Itens"
import BackButton from "../../../Components/BackButton/index"
import { useState } from "react"

import {RiArrowDropDownLine}from "react-icons/ri"

export function CreateFood(){

  const [Ingredients,setIngredients]=useState([])
  const [newIngredients,setNewIngredients]=useState()
  const [Name, setName]=useState()
  const [Category, setCategory]=useState()
  const [Price, setPrice]=useState()
  const [Description, setDescription]=useState()
  const [FoodImgFile,setFoodImgFile]=useState(null)

  function handleAddIngredients(){
  
      setIngredients(prevState=>[...prevState,newIngredients])
      setNewIngredients('')
  }

  const formatCurrency = (inputValue) => {
    const numericValue = inputValue.replace(/\D/g, '');
    const decimalValue = parseFloat(numericValue) / 100;
    const formattedValue = decimalValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formattedValue;
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatCurrency(inputValue);
    setPrice(formattedValue);
  };

  function handleRemoveIngredients(deleted){
    setIngredients(prevState=>prevState.filter(ingredient=>ingredient!==deleted))
  
    
}

const handleFileChange = (file) => {
  setFoodImgFile(file)
};

async function handleFoodCreate(){

  if(!Name||!Price||!Category || !Description||!Ingredients ||!FoodImgFile){
    return alert("Preenchar todos os campos")
  }

 const {data}= await api.post("/foods",{
    Name,Price,Category,Description,Ingredients
  })



    const fileUploadForm=new FormData()
    fileUploadForm.append("foodImage",FoodImgFile)
   

    await api.patch(`foods/foodImage/${data}`,fileUploadForm)



  alert("Prato Criado ")

}

    return(
        <Container>
            <Header type={1}/>
            <Content>
            <BackButton to={-1} fontSize={15}/>
              <form action="">
                <h2>Novo prato</h2>
                <InputImage title="Selecione uma Imagem" onChange={handleFileChange}/>
                <Input title="Nome" 
                placeholder="Ex: Salada Ceaser" 
                type="text"
                onChange={e=>setName(e.target.value)}
                />
                <div className="selectContainer">
                    <p>Categoria</p>
                    <select id="Categoria"
                      defaultValue="Escolha uma Categoria"
                      onChange={e=>setCategory(e.target.value)}>
                      <option value="Escolha uma Categoria">Escolha uma Categoria</option>
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
                <Input title="Preço" 
                placeholder="R$ 00,00" 
                value={Price}
                type="text"
                onChange={handleChange}
                />
                <WrapperTxtarea>
                  <label htmlFor="Descrição">Descrição</label>
                  <textarea name="" 
                  id="Descrição" 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                  onChange={e=>setDescription(e.target.value)}
                  >
                  </textarea>
                </WrapperTxtarea>
                <button onClick={handleFoodCreate} type="button">Salvar alterações</button>
              </form>
            </Content>
            <Footer/>
        </Container>
)
}