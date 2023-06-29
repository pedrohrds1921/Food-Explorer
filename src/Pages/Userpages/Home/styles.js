import styled  from "styled-components";


export const Container=styled.div`
width:100%;

`
export const Content= styled.main`
padding:1.6rem;
width:100%;
margin:0 auto;
@media (min-width:768px){
    padding: 1.5rem 7.6875rem;
    align-items:center;
    justify-content:space-between;
    gap: 2rem;
    width:70vw;
}

.box{
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    position:relative;
    margin-top:4.4rem;
    height:13rem;
    width:100%;
    padding:1.5rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 2.91696px;
    margin-bottom:2.3rem;

    @media (min-width:768px){
        height: 29vh;
    }
    
    img{
        position:absolute;
        z-index:-0;
        transform:translate(-31px, -35px);
        
        @media (min-width:768px){
            position:static;
            width: 39.5rem;
            height: 25.375rem;
            transform:translate(-31px, -39px);
        }
    }
    .text{
        width:100%;
        z-index:2;
        margin-left:13rem;
        display:flex;
        flex-direction:column;
        h1{
        font-size:1.8rem;
        }
        span{
            font-size:1.2rem; 
        }
        @media (min-width:768px){
            
        h1,span{
            font-size:2.5rem; 
            text-align:center;
        }
        }

    }


}
section{
    h2{
        margin-bottom:2.4rem;
    }

    .Foods{
        display:flex;
        gap:1.6rem;
        flex-shrink: 0;
        overflow-x:scroll;
    }


}

`