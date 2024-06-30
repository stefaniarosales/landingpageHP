import Card from "./Card";
import { SectionContainer, ProductsContainer } from "./ProductsStyle";

const articulos = [
  {
    id: 1,
    imagen: "../public/products/VaritaHarryPotter.webp",
    titulo: "Varita mágica",
    precio: 2500,
  },
  {
    id: 2,
    imagen: "../public/products/VaritaHarryPotter.webp",
    titulo: "Bufanda de Gryffindor",
    precio: 1800,
  },
  {
    id: 3,
    imagen: "../public/products/VaritaHarryPotter.webp",
    titulo: "Gafas redondas",
    precio: 1200,
  },
  {
    id: 4,
    imagen: "../public/products/VaritaHarryPotter.webp",
    titulo: "Gafas redondas",
    precio: 1200,
  },
  {
    id: 5,
    imagen: "../public/products/VaritaHarryPotter.webp",
    titulo: "Gafas redondas",
    precio: 1200,
  },
  {
    id: 6,
    imagen: "../public/products/VaritaHarryPotter.webp",
    titulo: "Gafas redondas",
    precio: 1200,
  },
];

const Products = () => {
  return (
    <SectionContainer>
      <h2>Productos de Harry Potter</h2>
      <ProductsContainer>
        {articulos.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
};

export default Products;
