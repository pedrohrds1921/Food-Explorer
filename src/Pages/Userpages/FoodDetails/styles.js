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

@media (min-width:768px){
    width:70vw;   
    margin:0 auto;   
    height:100%;
    
}


.wrapper{
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2.99rem;
  
}
.foodInfo{
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:1.5rem;


}


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
.image{
    width:20rem;
    height:20rem;
    border-radius:50%;
    img{
        width:100%;
        height:100%;
        border-radius:50%;
        object-fit:cover;
        margin:0 auto;
    }
}

h2{font-size:2rem;
    @media (min-width:768px){
      
        font-size:2.5rem;
}

}

p{
    text-align:center;

    @media (min-width:768px){
        text-align:start;
        font-size: 1.9rem;
}
}

.Checkout{
padding:1.6rem;
display:flex;
align-items: baseline;
gap:1.6rem;
>button{
    display:flex;
    gap:.5rem;
    margin:0;
    align-items:center;
    background-color:${({theme})=>theme.COLORS.Tints_Tomato_100};
    width:100%;
    padding: 1.5rem;
    border-radius:0.5rem;
    font-size:1.6rem;
    font-weight:bold;
    color:${({theme})=>theme.COLORS.Light_Light_300};
}
}

`

export const WrapperImg=styled.div`
flex:91rem;
width:20rem;
height:20rem;
border-radius: 50%;
padding:10px;
display:flex;
justify-content:center;
align-items:center;
background-color:${({theme})=>theme.COLORS.Dark_Dark_1000};
img{
    width:100%;
    height:100%;
    border-radius: 50%;
}

@media (min-width:768px){
    width:50rem;
    height:50rem;
    padding:10px;
}



`