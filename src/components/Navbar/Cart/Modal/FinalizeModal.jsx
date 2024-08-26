import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../../redux/cartSlice';


Modal.setAppElement('#root');

const FinalizeModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const handleConfirmPurchase = () => {
    dispatch(clearCart());
    onRequestClose();
  };

  
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Confirma tu compra</h2>
      <p>¿Estás seguro de que quieres finalizar tu compra?</p>
      <button onClick={handleConfirmPurchase}>Si, finalizar</button>
      <button onClick={onRequestClose}>Cancelar</button>
    </Modal>
  );
};

export default FinalizeModal;
