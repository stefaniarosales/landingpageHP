import React from 'react'
import Card from "./Card";
import { SectionContainer, ProductsContainer, SubTitleProducts } from "./ProductsStyle";

const articulos = [
  {
    id: 1,
    imagen: "/products/VaritaHarryPotter.webp",
    titulo: "Varita mágica",
    precio: 2500,
  },
  {
    id: 2,
    imagen: "/products/BufandaGryffindor.webp",
    titulo: "Bufanda de Gryffindor",
    precio: 1800,
  },
  {
    id: 3,
    imagen: "/products/EscobaHarryPotter.jpg",
    titulo: "Escoba Harry Potter",
    precio: 1200,
  },
  {
    id: 4,
    imagen: "/products/TunicaGryffindor.jpg",
    titulo: "Tunica Gryffindor",
    precio: 4000,
  },
  {
    id: 5,
    imagen: "/products/CajaJoyeriaMixHarryPotter.webp",
    titulo: "Caja de Joyeria Mixto",
    precio: 5500,
  },
  {
    id: 6,
    imagen: "/products/SombreroHarryPotter.jpg",
    titulo: "Sombrero",
    precio: 3500,
  },
];

const Products = () => {
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

export default Products;
