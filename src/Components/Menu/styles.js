import styled ,{keyframes} from "styled-components";


const zoomOut = keyframes`
  from {
    left:-100;
  }
  to {
    left:0;
  }
`;

export const Container=styled.div`
position:absolute;
top:0;
left:0%;
z-index:3;
width:100vw;
height:100vh;
overflow:hidden;
display:flex;
flex-direction:column;
justify-content:space-around;
background-color:${({theme})=>theme.COLORS.Dark_Dark_700};
animation: ${zoomOut} 7s ease-in;
header{
display:flex;
width:100%;
padding:5.6rem 2.8rem 2.4rem 2.8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_700};
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
button{
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