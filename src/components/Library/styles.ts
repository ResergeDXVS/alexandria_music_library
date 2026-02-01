import styled from "styled-components";

const LibrarySection = styled.section`
    width: 45%;
    background-color: #0A1F44;
    padding: 1.5rem;
    box-sizing: border-box;
    height: 100%;
    position: fixed;
    right: -70%;
    top: 0;
    box-shadow: -15px 0 15px -10px #1e8fff8c;
    transition: all 0.5s ease-in-out;
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
        color: #fffaba;
        font-size: 54px;
        transition: all 0.25s ease-in-out;
        &:hover{
            filter:brightness(1.5);
            transform: scale(1.1);
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
        color: #1E90FF;
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
    background-color: #0A1F44;
    margin: 0.5rem;
    padding: 0.5rem 2.75rem;
    gap: 1.5rem;
    height: 75%;
    overflow-y: auto;
    a{
        background-color: #1E90FF;
        border-radius: 1.5rem;
        padding: 0.5rem;
        text-decoration: none;
        transition: all 0.5s ease;
        &:hover{
            transform: scale(1.05);
            cursor: pointer;
        }
    }
`;

export {
    LibrarySection,
    LibraryCancel,
    LibraryTitle,
    LibraryList
};