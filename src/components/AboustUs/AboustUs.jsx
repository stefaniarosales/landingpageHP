import React from 'react'
import { SectionAboutsUs } from './AboutsUsStyle'
import { Subtitle } from './AboutsUsStyle'
import { SubtitleAboutsUs } from './AboutsUsStyle'
import { Parrafo } from './AboutsUsStyle'

const AboustUs = () => {
  return (
    <>
      <SectionAboutsUs>
        <Subtitle>Somos apasionados de Harry Potter y queremos compartir la magia contigo.</Subtitle>
        <SubtitleAboutsUs>Somos más que una simple tienda de comercio electrónico; somos un portal hacia el mágico mundo de Harry Potter. Creemos en que la magia no solo existe en las páginas de los libros, sino que también se puede encontrar en los productos que ofrecemos.</SubtitleAboutsUs>
        <SubtitleAboutsUs>Nuestro equipo está formado por fanáticos apasionados de Harry Potter que se dedican a brindarle todo lo que necesita para abrazar su lado mágico. Ya sea que sea un Gryffindor de corazón, un Slytherin astuto o un Hufflepuff leal, tenemos algo para todos.</SubtitleAboutsUs>
        <Parrafo>¡Descubre la magia de Harry Potter con nosotros!</Parrafo>
      </SectionAboutsUs>
    </>
  )
};

export default AboustUs
