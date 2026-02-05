import styled from "styled-components";



const MusicListSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem 3rem;
`;

const MusicListTitle = styled.div`
    width: 100%;
    padding: 0.5rem;

    h2{
        color: ${props => props.theme.colors.white};
        font-size: 4rem;
        font-weight: 900;
        line-height: 1;
        text-align: center;
        margin:0;
        padding: 0;
        text-transform: uppercase;
    }
`;

const MusicListSongs = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    gap:2rem;
    margin-top:0.5rem;
    padding: 0 1rem;
    width: 100%;
`;

const MusicListBorder = styled.article`
    padding: 0.35rem 0.5rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    transition: ${props => props.theme.transition};
    &:hover{
        background-color: #1e8fff81;
        transform: ${props => props.theme.scale};
    }
`;

const SongContainer = styled.div`
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background-color: ${props => props.theme.colors.utils};
    margin: 0.5rem;
    padding: .7rem 1.75rem;
`;

const SongOptions = styled.div`
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;

    button,
    a {
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
        text-decoration: none; /* quita subrayado en <a> */
        line-height: 1;
        &:hover {
            background-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.white};
            border: 0.25rem solid ${props => props.theme.colors.secondary};
            border-radius: 0.75rem;
            transform: ${props => props.theme.scale};
        }
    }
`;



export {
    MusicListSection,
    MusicListTitle,
    MusicListSongs,
    MusicListBorder,
    SongContainer,
    SongOptions
};