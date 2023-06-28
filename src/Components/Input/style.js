import { styled } from "styled-components";



export const Container= styled.div`
width:100%;
margin-bottom:2.4rem;

label{
display:block;
width:100%;
color:${({theme})=>theme.COLORS.Light_Light_400};
margin-bottom:1.6rem; 
}

input{
font-size:1.6rem;
width:100%;
display:flex;
align-items:center;
justify-content:flex-start;
gap: 0.8rem;
padding:1.2rem 3.2rem;
border: none;
border-radius: .8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_800};
color:${({theme})=>theme.COLORS.Light_Light_500};
}


`