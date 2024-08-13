import React from 'react'
import CardPage from './CardPage';
import { SectionContainer, ProductsContainer, SubTitleProducts } from "./ProductsPageStyled";
import { articulos } from '../../../data/products';


function ProductsPage() {
  return (
    <>
      <SectionContainer>
      <SubTitleProducts> Productos Mágicos</SubTitleProducts>
      <ProductsContainer>
        {articulos.map((producto) => (
          <CardPage key={producto.id} {...producto} />
        ))}
      </ProductsContainer>
    </SectionContainer>
    </>
  )
}

export default ProductsPage
