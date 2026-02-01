import styled from "styled-components";

const SearchBarContainer = styled.form`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #254172;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
`;

const SearchBarInput = styled.input`
    width: 100%;
    color:#fffaba;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
    background-color: #254172;
    border-color: none;
    border: none;
    outline: none;
    &::placeholder {
        color: #fff896e5;
    }
`;

const SearchButton = styled.button`
    background: #254172;
    border: none;
    outline: none;
    transition: all 0.25s ease-in-out;
    i{
        margin: 0;
        font-size: 32px;
        color: #fffaba;
        line-height: 1;
    }
    &:hover{
        transform: scale(1.1);
        color: #fff895;
    }
`;

export {
    SearchBarContainer,
    SearchBarInput,
    SearchButton
};