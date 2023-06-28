import { styled } from "styled-components";


export const Container= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:1.4rem;
    span{
        color:${({theme})=>theme.COLORS.Light_Light_300};
        font-size:2rem;
    }

`