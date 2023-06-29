import styled from "styled-components";


export const Container = styled.div`
font-size:15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;

grid-gap: 10px;
padding:1.4rem 5.6rem;
@media (min-width:768px){
    padding:5px 0px;
    
}

`
export const Content = styled.span`
font-size:15px;

padding:5px 14px;
flex-wrap:nowrap;
border-radius:5px;
text-align:center;
display:flex;
justify-content:center;
align-items:center;

color: ${({theme})=>theme.COLORS.Light_Light_100};
background-color: ${({theme})=>theme.COLORS.Dark_Dark_1000};




`