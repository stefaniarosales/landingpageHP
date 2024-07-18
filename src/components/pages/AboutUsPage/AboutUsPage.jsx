import React from 'react'
import { ContainerStyled, ContentStyled,TitleStyled,ItemsStyled, ItemStyled, } from './AboutUsPageStyled'

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HttpsIcon from '@mui/icons-material/Https';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



function AboutUsPage() {
  return (
    <>
      <ContainerStyled>
        <TitleStyled>Bienvenido a la Tienda Mágica de Harry Potter</TitleStyled>
        {/* <ImageStyled src="https://placehold.co/250x150/2980B9/FFF" alt="Imagen temática de Harry Potter" /> */}
        <ContentStyled>
          Somos una tienda online especializada en todo lo relacionado con el mundo mágico de Harry Potter. 
        </ContentStyled>
        <ContentStyled>
        Encontrarás desde varitas y escobas hasta ropa, accesorios y objetos decorativos para tu hogar. 
        </ContentStyled>
        <ContentStyled>
        Nuestro objetivo es que todos los fans de Harry Potter puedan encontrar los productos perfectos para expresar su amor por la saga.
        </ContentStyled>

        <ItemsStyled>

          <ItemStyled>
            Envío gratuito a partir de $50.000 en compras. <LocalShippingIcon/>
          </ItemStyled>

          <ItemStyled>
            Aceptamos todas las tarjetas de crédito y débito, PayPal y Mercado Pago. <HttpsIcon/>
          </ItemStyled>

          <ItemStyled>
            Estamos disponibles para ayudarte con cualquier duda o problema que tengas. <LocalPhoneIcon/>
          </ItemStyled>

        </ItemsStyled>

      </ContainerStyled>
    </>
  )
}

export default AboutUsPage
