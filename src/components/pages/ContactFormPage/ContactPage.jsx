import React from 'react'
import { ContainerContactPage,FormContainer, FormTitle, InputName, InputSurname, InputEmail, InputSubject,SubmitButton  } from './ContactFormStyle'

function ContactPage() {
  return (
    <>
      <ContainerContactPage>
        <FormContainer>
        <FormTitle>Contáctanos</FormTitle>

          <form>
            <InputName type="text" placeholder="Nombre" />
            <InputSurname type="text" placeholder="Apellido" />
            <InputEmail type="email" placeholder="Correo electrónico" />
            <InputSubject type="text" placeholder="Asunto" />

            <SubmitButton type="submit">Enviar</SubmitButton>
          </form>
        </FormContainer>
        </ContainerContactPage>
    </>
  )
}

export default ContactPage
