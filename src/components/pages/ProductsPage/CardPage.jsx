import React from 'react'
import { CardContainer, Imagen, Titulo, Precio} from './ProductsPageStyled';
import { ButtonAdd } from './ProductsPageStyled';

const CardPage = ({ imagen, titulo, precio }) => {
    return (
      <CardContainer>
        <Imagen src={imagen} alt={titulo} />
        <Titulo>{titulo}</Titulo>
        <Precio>${precio}</Precio>
        <ButtonAdd /* onClick={() => onAddToCart(producto)} */>Agregar</ButtonAdd>
      </CardContainer>
    );
  };
  
  export default CardPage;