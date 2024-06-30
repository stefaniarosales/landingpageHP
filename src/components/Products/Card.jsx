
import { CardContainer, Imagen, Titulo, Precio} from './ProductsStyle';
import { ButtonAdd } from './ProductsStyle';


const Card = ({ imagen, titulo, precio }) => {
  return (
    <CardContainer>
      <Imagen src={imagen} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Precio>${precio}</Precio>
      <ButtonAdd /* onClick={() => onAddToCart(producto)} */>Agregar</ButtonAdd>
    </CardContainer>
  );
};

export default Card;