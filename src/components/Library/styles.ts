import styled from "styled-components";

const LibrarySection = styled.section`
    width: 45%;
    background-color: ${props => props.theme.colors.utils};
    padding: 1.5rem;
    box-sizing: border-box;
    height: 100%;
    position: fixed;
    right: -70%;
    top: 0;
    box-shadow: -15px 0 15px -10px #1e8fff8c;
    transition: ${props => props.theme.transition};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.library--show{
        right: 0;
    }
`;

const LibraryCancel = styled.div`
    align-self: flex-end;
    i{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        padding: 16px;
        color: ${props => props.theme.colors.white};
        font-size: 54px;
        transition: ${props => props.theme.transition};
        &:hover{
            filter:${props => props.theme.filter_brightness};
            transform: ${props => props.theme.scale};
        }
    }
`;

const LibraryTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    padding: 0.5rem;
    h2{
        color: ${props => props.theme.colors.secondary};
        font-size: 3rem;
        font-weight: 900;
        line-height: 1;
        text-align: center;
        margin:0;
        padding: 0;
        text-transform: uppercase;
    }
`;

const LibraryList = styled.div`
    width: 75%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${props => props.theme.colors.utils};
    margin: 0.5rem;
    padding: 0.5rem 2.75rem;
    gap: 1.5rem;
    height: 75%;
    overflow-y: auto;
`;

const LibraryContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 1.5rem;
    padding: 0.5rem;
    text-decoration: none;
    transition: ${props => props.theme.transition};
    &:hover{
        transform: ${props => props.theme.scale};
    }
    button{
        flex:1;
        width: 50%;
        height:  50%;
        margin: 1rem;
        padding: 1rem;
        background-color: ${props => props.theme.colors.utils};
        color: ${props => props.theme.colors.secondary};
        border: 0.25rem solid ${props => props.theme.colors.secondary};
        border-radius: 0.75rem;
        transition: ${props => props.theme.transition};
        align-self: center;
        font-size: 24px;
        text-align: center;
        text-decoration: none; 
        line-height: 1;
        &:hover {
            background-color: ${props => props.theme.colors.white};
            color: ${props => props.theme.colors.utils};
            border: 0.25rem solid ${props => props.theme.colors.white};
            border-radius: 0.75rem;
        }
    }
`;


export {
    LibrarySection,
    LibraryCancel,
    LibraryTitle,
    LibraryList,
    LibraryContainer
};