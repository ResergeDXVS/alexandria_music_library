import styled from "styled-components";

const SearchBarContainer = styled.form`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.searchbar};
    border-radius: 2rem;
    padding: 0.5rem 2rem;
`;

const SearchBarInput = styled.input`
    font-family: ${props => props.theme.fonts.base};
    width: 100%;
    color:${props => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
    background-color: ${props => props.theme.colors.searchbar};
    border-color: none;
    border: none;
    outline: none;
    &::placeholder {
        color: ${props => props.theme.colors.white_transform};
    }
`;

const SearchButton = styled.button`
    background: ${props => props.theme.colors.searchbar};
    border: none;
    outline: none;
    transition: ${props => props.theme.transition};
    i{
        margin: 0;
        font-size: 32px;
        color: ${props => props.theme.colors.white};
        line-height: 1;
    }
    &:hover{
        transform: ${props => props.theme.scale};
        color: #fff895;
    }
`;

export {
    SearchBarContainer,
    SearchBarInput,
    SearchButton
};