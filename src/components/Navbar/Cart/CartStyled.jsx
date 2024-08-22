import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 56px;
  right: 155px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 1000;
`;

export const CartItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px; /* Limitar la altura del contenedor */
  overflow-y: auto;  /* Habilitar el scroll vertical si es necesario */
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 20px;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #dee2e6;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #495057;
`;

export const CartItemPrice = styled.p`
  margin: 5px 0;
  color: #6c757d;
`;

export const CartItemQuantity = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  text-align: center;
  margin: 0 10px;
`;

export const QuantityButton = styled.button`
  background-color: #FFC500;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ab9b68;
  }
`;

export const CartItemRemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #7F0909;

  &:hover {
    color: #943f47;
  }
`;

export const CartActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 20px;
`;

export const CartActionButton = styled.button`
  background-color: #7F0909;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:#943f47;
  }
`;

export const CartTotal = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
  margin: 20px 0 10px;
`;

