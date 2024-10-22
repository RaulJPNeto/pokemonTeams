import styled from "styled-components";

export const Link = styled.p`
    display: block;
    margin-top: 1rem;
    color: #3b4cca;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const StyledLink = ({ type = 'text', ...props }) => {
    return <Link type={type} {...props} />;
};

export default StyledLink;