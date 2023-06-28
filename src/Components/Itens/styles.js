import styled from "styled-components";



export const Container= styled.div`
display:flex;
align-items:center;
background-color:${({theme,isNew})=> isNew? "transparent":theme.COLORS.Light_Light_600};
color:${({theme,isNew})=> isNew? theme.COLORS.Light_Light_600:theme.COLORS.Light_Light_100};
border:${({theme,isNew})=> isNew? `2px dashed ${theme.COLORS.Light_Light_600} `:"none"};
margin-bottom:8px;
border-radius:10px;
position:relative;
padding-right:16px;


>input{
   width:100%;
    padding:12px;
    font-size:1.6rem;
    background-color:transparent;
    border: none;
    color:${({theme,isNew})=> isNew? theme.COLORS.Light_Light_600:theme.COLORS.Light_Light_100};
    &::placeholder{
        color:${({theme,isNew})=> isNew? theme.COLORS.BLUE:theme.COLORS.WHITE};
        
    }&:focus{
        outline:none;      
        
    } 
    
}

>button{
    
    background-color:transparent;
    border: none;
    font-size:20px;
}

.btn-delete{
    color:${({theme})=>theme.COLORS.Light_Light_100};
}
.btn-add{
    color:${({theme})=>theme.COLORS.Light_Light_600};
}







`