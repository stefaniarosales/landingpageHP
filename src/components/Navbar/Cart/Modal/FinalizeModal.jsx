import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../../redux/cartSlice';

import { ButtonFinalize } from './FinalizeModalStyled';

Modal.setAppElement('#root');

const FinalizeModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const handleConfirmPurchase = () => {
    dispatch(clearCart());
    alert("¡Tu compra se ha realizado con éxito!")
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Confirma tu compra</h2>
      <p>¿Estás seguro de que quieres finalizar tu compra?</p>
      <ButtonFinalize onClick={handleConfirmPurchase}>Si, finalizar</ButtonFinalize>
      <ButtonFinalize onClick={onRequestClose}>Cancelar</ButtonFinalize>
    </Modal>
  );
};

export default FinalizeModal;
