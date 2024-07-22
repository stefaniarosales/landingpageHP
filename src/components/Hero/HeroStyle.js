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
    outline: 1px red solid;

`;

export const SubTitle=styled.h2`
    color: white;
    font-weight: lighter;
    font-size: 1rem;
    max-width: 950px;
    outline: 1px red solid;

`;

export const ButtonHero=styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #d43227;
    color: white; 
    font-size: 1rem; 
    align-items: flex-start;
    max-width: 950px;

    &:hover{
        background-color: #992721;
        cursor: pointer;
    }
`;
