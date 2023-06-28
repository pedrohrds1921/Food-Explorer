import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
:root{
    font-size:62.5%
}
    body{
        font-size:1.6rem;
        background-color:${({theme})=>theme.COLORS.Dark_Dark_400};
        color: ${({theme})=>theme.COLORS.Light_Light_100};
        font-family: 'Poppins', sans-serif;
        
    }

    a{
        text-decoration:nome
    }
    button{
        background: none;
        border: none;
    }
    
    button, a{
        cursor: pointer;
        transition:filter 0.2s
    }
    button:hover, a:hover{
        filter:brightness(0.9)
    }



`