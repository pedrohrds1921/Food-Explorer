import { styled } from "styled-components";

export const Container=styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:100%;
height:11.4rem;
padding:5.6rem 2.8rem 2.4rem 2.8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_700};

@media (min-width:768px){
    padding: 1.5rem 20.6875rem;
    align-items:center;
    justify-content:space-between;
    gap: 2rem;
}

.singOut{
    color:${({theme})=>theme.COLORS.Light_Light_100};
}
.Pedido{
    background-color:${({theme})=>theme.COLORS.Tints_Tomato_100};
    display: flex;
    width: 13.5rem;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    color:${({theme})=>theme.COLORS.Light_Light_100};
}

a{
    text-decoration:none;
    color:${({theme})=>theme.COLORS.Light_Light_100}
}
.Logo{
 
    display:flex;
    gap: 0.8rem;
   >p{
    font-size:1.2rem;
    color:${({theme})=>theme.COLORS.Tints_Cake_200};
   }
}

.svgContainer{
position:relative;

.Payload{
    position:absolute;
    top:-1.3rem;
    left:1.3rem;
    width:2.5rem;
    height:2.5rem;
    display:flex;
    justify-content:center;
    background: ${({theme})=>theme.COLORS.Tints_Tomato_100};
    border-radius:50%

}
}

`