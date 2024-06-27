import React from 'react'
import { SectionHero } from './HeroStyle'
import { Title } from './HeroStyle'
import { SubTitle } from './HeroStyle';
import { ButtonHero } from './HeroStyle';

const Hero = () => {
  return (
      <SectionHero>
        <Title>Descifra la magia. Explora el mundo de Harry Potter.</Title>
        <SubTitle>Sumérgete en la saga que cautivó a millones. Descubre libros, películas, personajes y mucho más.</SubTitle>
        <ButtonHero>Explorar el Mundo Mágico</ButtonHero>
      </SectionHero>
  )
};

export default Hero
