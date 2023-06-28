import { styled } from "styled-components";


export const Container=styled.div`

width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:4.7rem;
flex-direction:column;
>svg{

    margin-bottom:7.3rem;
}
button{
        width:100%;
        padding:1.2rem;
        font-size:1.6rem;
        border-radius: .5rem;
        background-color:${({theme})=>theme.COLORS.Tints_Tomato_100};
        color:${({theme})=>theme.COLORS.Light_Light_100};
        margin-bottom:3.2rem;
}
a{
    text-decoration:none;
    color:${({theme})=>theme.COLORS.Light_Light_100};

}

`