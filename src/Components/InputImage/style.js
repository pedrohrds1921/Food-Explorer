import { styled } from "styled-components";



export const Container= styled.div`
width:100%;
margin-bottom:2.4rem;
p{
   margin-bottom:1.6rem; 
}
label{
width:100%;

display:flex;
align-items:center;
justify-content:flex-start;
gap: 0.8rem;
padding:1.2rem 3.2rem;
border-radius: .8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_800};
}

input[type=file]{
    display:none; 
}
`

export const Preview=styled.div`
width:100vw;
height:100vh;
background: black;

position:absolute;
display:flex;
place-items:center;
place-content:center;
top:0;
left:0;
z-index:3;

div div{
    
   
    label{
            color: white !important; 
        }
}
`