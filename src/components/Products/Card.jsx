import React from 'react'
import { CardContainer, Imagen, Titulo, Precio} from './ProductsStyle';
import { ButtonAdd } from './ProductsStyle';
import { addproduct } from '../../redux/productsSlice';


const Card = ({ imagen, titulo, precio }) => {
  return (
    <CardContainer>
      <Imagen src={imagen} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Precio>${precio}</Precio>
      <ButtonAdd onClick={() => addproduct()}>Agregar</ButtonAdd>
    </CardContainer>
  );
};

export default Card;