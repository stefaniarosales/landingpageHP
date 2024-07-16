import styled from "styled-components";

export const NavbarContainerStyled = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: white;
    a{
        font-size: 1rem;
        font-weight: bolder;
        align-items: center;
        margin-right: 1rem;
    }
    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease; 
        a{
            color: black;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            top: 0;
            margin: 0;
            a{
                font-size: 1rem;
                color: black;
                display: inline;
            }
        } 
    }
    .links.active{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 1px;
        left: 0;
        right: 0;
        text-align: center;

        border-radius: 0 0 80% 0;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.75);
        a{
            color: black;
            font-size: 2rem;
            margin-top: 1rem;
        }
    }
    .burger{
        @media(min-width: 768px) {
            display: none;
        }
    }
`

export const ImgLogoStyled =styled.img`
    width: 4rem;
    padding: 0.5rem;
    cursor: pointer;
`;
