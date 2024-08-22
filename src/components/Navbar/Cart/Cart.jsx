import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart, closeCart } from '../../../redux/cartSlice';
import FinalizeModal from './Modal/FinalizeModal';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  CartContainer,
  CartItemsList,
  CartItem,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  CartItemQuantity,
  QuantityButton,
  CartItemRemoveButton,
  CartActions,
  CartActionButton,
  CartTotal,
} from './CartStyled'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const isOpen = useSelector((state) => state.cart.isOpen)
  const dispatch = useDispatch()
  const cartRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }))
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }))
    }
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //manejo de los modales
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Calcular el total del carrito
  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.precio * item.quantity, 0);
  }, [items]);

  // Cerrar el carrito si se hace clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        dispatch(closeCart())
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dispatch]);

  return (
  isOpen && (
    <CartContainer ref={cartRef}>
      {items.length === 0 ? (<p>Carrito vacio</p>) 
      :(
        <>
          <h2>Tus Compras </h2>
          <CartItemsList>
            {items.map(item => (
              <CartItem key={item.id}>
                <CartItemDetails>
                  <CartItemTitle>{item.titulo}</CartItemTitle>
                  <CartItemPrice>${item.precio}</CartItemPrice>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</QuantityButton>
                    <CartItemQuantity
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</QuantityButton>
                  </div>
                </CartItemDetails>

                <CartItemRemoveButton onClick={() => handleRemoveItem(item.id)}>
                  <DeleteIcon />
                </CartItemRemoveButton>
              </CartItem>
            ))}
          </CartItemsList>
          <CartTotal>Total: ${totalPrice.toFixed(2)}</CartTotal>
          <CartActions>
            <CartActionButton onClick={handleClearCart}>Borrar productos</CartActionButton>
            <CartActionButton onClick={handleOpenModal}>Finalizar compra</CartActionButton>
          </CartActions>
        </>
      )}
      <FinalizeModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </CartContainer>
  )
  );
};

export default Cart;
