import { styled } from "styled-components";


export const Container= styled.button`
width:60%;
background-color:${({theme})=>theme.COLORS.Dark_Dark_300};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2.5rem;
border-radius:0.8rem;
gap:1.2rem;
flex-shrink:0;


@media (min-width:768px){
    width:auto;
    display: flex;
    height: 28.875rem;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;
}

p{
font-size:1.6rem;
font-weight:bold;
color:${({theme})=>theme.COLORS.Light_Light_300};
}
span{
    margin:0 auto;
    color:${({theme})=>theme.COLORS.Tints_Cake_200};
    font-size:2rem;
}

.Quanty{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1.4rem;
    span{
        color:${({theme})=>theme.COLORS.Light_Light_300};
        font-size:1.9rem;
    }

}

>button{
    background-color:${({theme})=>theme.COLORS.Tints_Tomato_100};
    width:100%;
    padding:0.4rem 5.9rem;
    border-radius:0.5rem;
    font-size:1.6rem;
    font-weight:bold;
    color:${({theme})=>theme.COLORS.Light_Light_300};
}

`
export const WrapperImg=styled.div`

width:18rem;
height:18rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background-color:${({theme})=>theme.COLORS.Dark_Dark_1000};

img{
    width:90%;
    aspect-ratio:1/1;
    border-radius: 50%;
}

`