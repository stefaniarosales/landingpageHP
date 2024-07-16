import React from 'react'
import { ContainerStyled, ContentStyled, ItemIconStyled,TitleStyled,ItemsStyled, ItemStyled, } from './AboutUsPageStyled'

function AboutUsPage() {
  return (
    <>
      <ContainerStyled>
      <TitleStyled>Bienvenido a la Tienda Mágica de Harry Potter</TitleStyled>
      {/* <ImageStyled src="https://placehold.co/250x150/2980B9/FFF" alt="Imagen temática de Harry Potter" /> */}
      <ContentStyled>
        Somos una tienda online especializada en todo lo relacionado con el mundo mágico de Harry Potter. 
        Encontrarás desde varitas y escobas hasta ropa, accesorios y objetos decorativos para tu hogar. 
        Nuestro objetivo es que todos los fans de Harry Potter puedan encontrar los productos perfectos para expresar su amor por la saga.
      </ContentStyled>
      <ItemsStyled>
        <ItemStyled>
          <ItemIconStyled className="fas fa-shipping-fast">**Envío rápido y seguro**</ItemIconStyled>
          Envío gratuito a partir de $50 en compras.
        </ItemStyled>
        <ItemStyled>
          <ItemIconStyled className="fas fa-lock">**Pagos seguros**</ItemIconStyled>
          Aceptamos todas las tarjetas de crédito y débito, PayPal y Mercado Pago.
        </ItemStyled>
        <ItemStyled>
          <ItemIconStyled className="fas fa-headset">**Atención al cliente**</ItemIconStyled>
          Estamos disponibles para ayudarte con cualquier duda o problema que tengas.
        </ItemStyled>
      </ItemsStyled>
    </ContainerStyled>
    </>
  )
}

export default AboutUsPage
