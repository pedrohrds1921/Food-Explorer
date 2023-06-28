import styled  from "styled-components";


export const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
`
export const Content= styled.main`
padding:2.8rem;
width:100%;
flex-grow:2;
display:flex;
flex-direction:column;
gap:1.6rem;
align-items:center;
button{
    display:flex;
    align-items:center;
    margin-bottom:2rem;
    width:100%;
    p{
    color:${({theme})=>theme.COLORS.Light_Light_100};
    font-size:2rem;
    }
}

h2{font-size:2rem;}

p{
    text-align:center;
}


.Edit{
    display:block;
    text-align:center;
    background-color:${({theme})=>theme.COLORS.Tints_Tomato_100};
    width:100%;
    padding: 1.5rem;
    border-radius:0.5rem;
    font-size:1.6rem;
    font-weight:bold;
    color:${({theme})=>theme.COLORS.Light_Light_300};
}

`

export const WrapperImg=styled.div`
width:20rem;
height:20rem;
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