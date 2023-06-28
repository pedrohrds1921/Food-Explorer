import styled  from "styled-components"
export const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
`
export const Content= styled.main`
flex-grow:2;
padding: 3.2rem;
width:100%;
margin:0 auto;

form{
    width:100%;
    >h2{
        margin-bottom:2.4rem;
    }
    .selectContainer{
        position:relative;
        border-radius: .8rem;
        width: 100%;
        margin-bottom:2.4rem;
        p{
            width:100%;
            color:${({theme})=>theme.COLORS.Light_Light_400};
            margin-bottom:1.6rem; 
        }
        select{
        font-size:1.6rem;    
        position:relative;
        appearance: none;
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
        >label{
            position:absolute;
            top:50%;
            bottom:50%;
            transform:translateY(-50%);
            right:1.2rem;
            
        }
    }
    >button{
        width:100%;
        padding:1.2rem;
        font-size:1.6rem;
        border-radius: .5rem;
        background-color:${({theme})=>theme.COLORS.Tints_Tomato_400};
        color:${({theme})=>theme.COLORS.Light_Light_100};
    }
}
`
export const IngredientsArea=styled.div`
width:100%;
display:grid;

flex-wrap:wrap;
justify-content:space-between;
gap: 0.8rem;
padding:1.5rem 3.2rem;
border: none;
border-radius: .8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_800};
color:${({theme})=>theme.COLORS.Light_Light_500};
margin-bottom:2.4rem;
`
export const Wrapper=styled.div`
p{
width:100%;
color:${({theme})=>theme.COLORS.Light_Light_400};
margin-bottom:1.6rem;  
}
`
export const WrapperTxtarea=styled.div`
label{
display:block;
width:100%;
color:${({theme})=>theme.COLORS.Light_Light_400};
margin-bottom:1.6rem;  
}
textarea{
resize:none;
height:17.2rem;
font-size:1.6rem;
padding:1.4rem;
width:100%;
border: none;
border-radius: .8rem;
background-color:${({theme})=>theme.COLORS.Dark_Dark_800};
color:${({theme})=>theme.COLORS.Light_Light_500};
margin-bottom:2.4rem;  
}
`
