import styled  from "styled-components";


export const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
header{
display:flex;
width:100%;
padding:5.6rem 2.8rem 2.4rem 2.8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_700};
a{
    text-decoration:none;
}
button{
    display:flex;
    align-items:center;
    p{
    color:${({theme})=>theme.COLORS.Light_Light_100};
    font-size:1.8rem;
    }
}
}

`
export const Content= styled.main`
padding:2.8rem;
width:100%;
flex-grow:2;
a{text-decoration:none}
button{
    margin-bottom:1.7rem;
    width:100%;
    border-bottom: 1px solid #192227;
    display:flex;
    p{
        color:${({theme})=>theme.COLORS.Light_Light_100};
        font-size:2rem;
        margin-bottom:1rem;
    }

}

`