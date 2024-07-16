import styled from "styled-components";

export const ContainerStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    padding: 0 3rem;
    padding-top: 100px;
    text-align: center;
`;

export const TitleStyled = styled.h1`
    font-family: 'Harry Potter', serif;
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
    max-width: 1050px;
`;

export const ContentStyled = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #666;
    margin-bottom: 20px;
    max-width: 1050px;
`;

/* export const ImageStyled = styled.img`
    width: 250px;
    height: auto;
    margin-bottom: 20px;
`; */

export const ItemsStyled = styled.ul`
    list-style: none;
    padding: 0;
    max-width: 1050px;
`;

export const ItemStyled = styled.li`
    margin-bottom: 10px;
    max-width: 1050px;
`;

export const ItemIconStyled = styled.i`
    margin-right: 10px;
    max-width: 1050px;
`;
