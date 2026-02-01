import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2% 3%;
    margin: 0;
    background-color: ${props => props.theme.colors.utils};
`;

const HeaderMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
    transition: ${props => props.theme.transition};
    &:hover{
        cursor: pointer;
        transform: ${props => props.theme.scale};
        filter:${props => props.theme.filter_brightness};
    }

    .header__logo{
        width: 96px;
        aspect-ratio: 1/1;
    }

    h1{
        color: ${props => props.theme.colors.white};
        font-size: 3rem;
        font-weight: 900;
        line-height: 1;
        text-align: left;
        margin:0;
        padding: 0;
    }
`;

const HeaderLibrary = styled.div`
    margin: 0;
    padding: 0;
    i{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        padding: 16px;
        color: ${props => props.theme.colors.white};
        font-size: 96px;
        transition: ${props => props.theme.transition};
        &:hover{
            filter:${props => props.theme.filter_brightness};
            transform: ${props => props.theme.scale};
        }
    }
    
`;


export{
    HeaderContainer,
    HeaderMain,
    HeaderLibrary
};