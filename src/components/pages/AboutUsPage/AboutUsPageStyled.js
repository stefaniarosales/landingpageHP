import styled from "styled-components";

export const ContainerStyled = styled.section`
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-top: 100px;
    padding: 0 2rem;
    text-align: center;
`;

export const TitleStyled = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    max-width: 950px;
`;

export const ContentStyled = styled.p`
    width: 100%;
    font-size: 16px;
    max-width: 950px;
`;

export const ItemsStyled = styled.div`
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 60px;
    margin-bottom: 10px;
    max-width: 950px;
`;

export const ItemStyled = styled.p`
    font-weight: bold;
    color: #7F0909 ; 
    font-size: 14px;
    max-width: 950px;
    @media (max-width: 768px) {
        padding-bottom: 0.5rem;
    }
`;

