import styled from "styled-components";

export const Container= styled.div`
width:100%;
padding:1.6rem;
height:5rem;
display:flex;
gap:1.4rem;
align-items:center;
border-radius: .5rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_900};
margin-bottom:3.6rem;


@media (min-width:768px){
    align-items:center;
    justify-content:space-between;
    gap: 2rem;
    margin-bottom:0;
}
>button{
    position:absolute;
    color:${({theme})=>theme.COLORS.Light_Light_500};
  width:30px;
}
input{
font-size:1.6rem;
width:100%;
padding:1.6rem;
border: none;
margin-left:2rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_900};
color:${({theme})=>theme.COLORS.Light_Light_500};

&:focus{
    outline:none;
    border: none;
}

}
`