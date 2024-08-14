import React from 'react';
import Card from "./Card";
import { articulos } from '../../data/products.js';
import { SectionContainer, ProductsContainer, SubTitleProducts } from "./ProductsStyle";
import Categorys from './Categorys/Categorys.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/productsSlice';

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const dispatch = useDispatch();   


  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  // Filtrado de los productos según la categoría seleccionada
  const filteredProducts = products.filter((product) => {
    return selectedCategory === '' || product.category === selectedCategory;
  });

  return (
    <SectionContainer>
      <SubTitleProducts>Tesoros de Hogwarts</SubTitleProducts>
      <Categorys onCategoryClick={handleCategoryClick} />
      <ProductsContainer>
        {filteredProducts.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
};

export default Products;
