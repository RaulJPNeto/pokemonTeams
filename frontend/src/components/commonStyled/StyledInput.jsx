import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    max-width: 400px; // Definindo uma largura máxima
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box; // Garante que padding e border sejam incluídos na largura total
    &:focus {
        outline: none;
        border-color: #3b4cca;
    }
`;

const StyledInput = ({ type = 'text', ...props }) => {
    return <Input type={type} {...props} />;
};

export default StyledInput;