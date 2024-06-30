import React from 'react'
import { SectionHero } from './HeroStyle'
import { Title } from './HeroStyle'
import { SubTitle } from './HeroStyle';
import { ButtonHero } from './HeroStyle';

const Hero = () => {
  return (
      <SectionHero>
        <Title>Descifra la magia. Explora el mundo de Harry Potter.</Title>
        <SubTitle>Explora una amplia selección de productos oficiales, desde varitas y túnicas hasta libros y coleccionables</SubTitle>
        <ButtonHero>Explorar el Mundo Mágico</ButtonHero>
      </SectionHero>
  )
};

export default Hero
