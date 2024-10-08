import styled from "styled-components";

export const ContainerContactPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 2rem;
    gap: 2rem;
    padding-top: 100px;


    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`
export const ImgContactContainer = styled.div`
    background-image: url(../pages/contactanos/Contactanos.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 900px;
    height: 60%;
    width: 100%;

    @media (max-width: 768px) {
        height: 40%;
    }
`
export const FormContainer = styled.div`
    height: 60%;
    max-width: 900px;
    padding: 0.5rem;
    background-color: #f8f8f8;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        height: 40%;
        padding-bottom: 1.5rem;
    }
`;

export const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #333;
`;

export const InputName = styled.input`
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background-image: linear-gradient(to right, #cdcdcd, #f2f2f2);
    background-size: 200% 100%;
    background-position: left;
    border-radius: 7px;
    font-size: 16px;
    transition: background-position 0.3s ease;

    &:focus {
    outline: none;
    background-position: right;
}
`;

export const InputSurname = styled(InputName)`
`;

export const InputEmail = styled(InputName)`
`;

export const InputSubject = styled(InputName)`
    height: 4rem;
`;


export const SubmitButton = styled.button`
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #7F0909;
    color: white; 
    font-size: 1rem;
    font-weight: bold;
    text-align: center;

    &:hover {
        background-color: #FFC500;
        color: #7F0909;
        cursor: pointer;
    }
/*    @media (max-width: 768px) {


    } */
`;