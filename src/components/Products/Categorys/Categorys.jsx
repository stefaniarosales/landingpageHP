import React from 'react';
import { CategContainer, BtnCategory } from "./CategoryStyled";

function Categorys({ onCategoryClick }) {
  return (
    <div>
      <CategContainer>
        <BtnCategory onClick={() => onCategoryClick('libros')}>Libros</BtnCategory>
        <BtnCategory onClick={() => onCategoryClick('varitas')}>Varitas</BtnCategory>
        <BtnCategory onClick={() => onCategoryClick('indumentaria')}>Indumentaria</BtnCategory>
        <BtnCategory onClick={() => onCategoryClick('accesorios')}>Accesorios</BtnCategory>
      </CategContainer>
    </div>
  );
}

export default Categorys;