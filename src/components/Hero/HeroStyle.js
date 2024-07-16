import styled from "styled-components";

export const SectionHero=styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 5rem 3rem;

    background-image: url(/hero/hogwartsHero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

    @media (max-width: 768px) {
		align-items: center;
	}
`;

export const Title=styled.h1`
    color: white;
    font-size: 2rem;
    padding: 0 1rem;
    text-align: center;
    max-width: 1050px;
`;

export const SubTitle=styled.h2`
    color: white;
    font-weight: lighter;
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
    max-width: 1050px;
`;

export const ButtonHero=styled.button`
    padding: 10px 20px;
    margin: 0 1rem;
    border-radius: 5px;
    cursor: pointer;
    background-color: #d43227;
    color: white; 
    font-size: 1rem; 
    align-items: flex-start;
    max-width: 1050px;

    &:hover{
        background-color: #992721;
        cursor: pointer;
    }

    @media (max-width: 768px) {
		align-items: center;
	}
`;
