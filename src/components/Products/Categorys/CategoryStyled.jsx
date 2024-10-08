import styled from "styled-components";

export const CategContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`

export const BtnCategory = styled.button`
    width: 150px;
    height: 45px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    margin: 0 1rem;
    border-radius: 5px;
    cursor: pointer;
    background-color:#7F0909;
    color: white; 
    font-size: 1rem;

    @media (max-width: 768px) {
        width: 120px;
        padding: 0.5rem;
        margin: 0;
    }
`