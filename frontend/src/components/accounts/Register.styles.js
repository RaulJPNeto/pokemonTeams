import styled from "styled-components";

export const RegisterWrapper =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f7f7f7;
`;

export const RegisterBox = styled.div`
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h2`
    color: #ffcb05; // Diferenciar a cor do título
    margin-bottom: 1.5rem;
`;

export const Button  = styled.button`
    width: 100%;
    padding: 0.75rem;
    background-color: #3b4cca;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2f399d;
    }
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const LinkStyled = styled.p`
  display: block;
  margin-top: 1rem;
  color: #3b4cca;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;