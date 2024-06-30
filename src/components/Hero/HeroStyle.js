import styled from "styled-components";

export const SectionHero=styled.section`

    height:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 5rem 0 ;
    margin-top: 70px;

    background-image: url(/hero/hogwartsHero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const Title=styled.h1`

    width: 30rem;
    padding: 0.5rem;
    text-align: center;
`

export const SubTitle=styled.h2`

    width: 30rem;
    font-weight: lighter;
    font-size: 15px;
    text-align: center;
`

export const ButtonHero=styled.button`

    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #d43227;
    color: white; 
    font-size: 18px; 
    text-align: center; 
    margin-left: 7rem;

    &:hover{
        background-color: #992721;
        cursor: pointer;
    }
`
