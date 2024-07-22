import styled from "styled-components";

export const SectionHero=styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 5rem 2rem;
    padding-top: 100px;
    height: 500px;

    background-image: url(/hero/hogwartsHero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    @media (max-width: 768px) {
		align-items: center;
        background-position: center center;
        justify-content: center;
	}
`;

export const Title=styled.h1`
    color: white;
    font-size: 2rem;
    max-width: 950px;
`;

export const SubTitle=styled.h2`
    color: white;
    font-weight: lighter;
    font-size: 1rem;
    max-width: 950px;

    @media (max-width: 768px) {
        text-align: center;
    }

`;

export const ButtonHero=styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #7F0909;
    color: white; 
    font-size: 1rem; 
    font-weight: bold;
    align-items: flex-start;
    max-width: 950px;

    &:hover{
        background-color: #FFC500;
        color: #7F0909;
        cursor: pointer;
    }
`;