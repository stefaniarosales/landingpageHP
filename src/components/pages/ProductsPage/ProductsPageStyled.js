import styled from "styled-components";

export const CardContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Imagen = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 16px;
`;

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const Precio = styled.p`
    font-size: 16px;
`;


/* Section Products Container */
export const SubTitleProducts = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`;
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:  0 2rem;
  padding-top: 100px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;


/* Button Agregar */
export const ButtonAdd = styled.button`
    padding: 10px 25px;
    margin: 0 1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    background-color: #7F0909;
    color: white; 
    font-size: 1rem; 

    &:hover {
      background-color: #FFC500;
      color: #7F0909;
      cursor: pointer;
    }
`;

