import styled from "styled-components";

export const SectionHero=styled.section`

    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
    padding-top: 80px;
    padding-bottom: 2rem;

    background-image: url(./public/hero/hogwartsHero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
`
export const Title=styled.h1`

    width: 30rem;
    color: grey;
    padding: 0.5rem;
    text-align: center;
`

export const SubTitle=styled.h2`

    width: 30rem;
    color: grey;
    font-weight: lighter;
    font-size: 15px;
    text-align: center;
`

export const ButtonHero=styled.button`

    width: 190px;
    height: 60px;
    padding: 0.2rem;
    border-radius: 50px;
    outline: 1px solid grey;
    font-weight: bolder;
    color:grey;
    margin-right: 10rem;

    button:hover{
        color: black;
        background-color: #131415;
        cursor: pointer;
    }
`
