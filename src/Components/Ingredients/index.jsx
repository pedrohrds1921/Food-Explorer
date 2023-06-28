import { Container,Content } from "./styles";


export function Ingredients({ingredientsData,...rest}){

    return(
        <Container {...rest} >
            {ingredientsData.map(data=>(
            <Content key={data}>
                {data}
           </Content>
            ))}
           
        </Container>
    )
        
    
}