import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../redux/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonCartStyled } from './CartButtonStyled';


const CartButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isOpen)

  return (
    
    <ButtonCartStyled onClick={() => dispatch(toggleCart())}>
      { isOpen ? <CloseIcon /> : <ShoppingCartIcon />}
    </ButtonCartStyled>
  );
}; 

export default CartButton;

