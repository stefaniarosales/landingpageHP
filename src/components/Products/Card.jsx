import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem, toggleCart} from '../../redux/cartSlice';

import { CardContainer, Imagen, Titulo, Precio} from './ProductsStyle';
import { ButtonAdd } from './ProductsStyle';



const Card = ({ imagen, titulo, precio, id}) => {

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({id,titulo,precio}))
    dispatch(toggleCart()) //abre o cierra el carrito al hacer click en agregar.
  }

  return (
    <CardContainer>
      <Imagen src={imagen} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Precio>${precio}</Precio>
      <ButtonAdd onClick={handleAddToCart}>Agregar</ButtonAdd>
    </CardContainer>
  );
};

export default Card;