import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2% 3%;
    margin: 0;
    background-color: #0A1F44;
`;

const HeaderMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
    transition: all 0.25s ease-in-out;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        filter:brightness(1.5);
    }

    .header__logo{
        width: 96px;
        aspect-ratio: 1/1;
    }

    h1{
        color: #fffaba;
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
        color: #fffaba;
        font-size: 96px;
        transition: all 0.25s ease-in-out;
        &:hover{
            filter:brightness(1.5);
            transform: scale(1.1);
        }
    }
    
`;


export{
    HeaderContainer,
    HeaderMain,
    HeaderLibrary
};