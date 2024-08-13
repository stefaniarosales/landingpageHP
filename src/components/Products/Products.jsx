import React from 'react'
import Card from "./Card";
import { articulos } from '../../data/products.js';
import { SectionContainer, ProductsContainer, SubTitleProducts } from "./ProductsStyle";

import {useSelector, useDispatch} from 'react-redux'
import { addproduct, removeproduct } from '../../redux/productsSlice';

/* const Products = () => {
  return (
    <SectionContainer>
      <SubTitleProducts>Tesoros de Hogwarts</SubTitleProducts>
      <ProductsContainer>
        {articulos.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
};

export default Products; */

const Products = () => {

  const products = useSelector((state)=> state.products.products)
  const dispatch = useDispatch()


  const handleAddProduct = (newProduct) => {
    dispatch(addproduct(newProduct))
  }

  return (
    <SectionContainer>
      <SubTitleProducts>Tesoros de Hogwarts</SubTitleProducts>
      <ProductsContainer>
        {articulos.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
}

export default Products
