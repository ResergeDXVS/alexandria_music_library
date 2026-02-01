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
        color: #fffaba;
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
    transition: all 0.25s ease-in-out;
    &:hover{
        background-color: #1e8fff81;
        transform: scale(1.05);
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
    background-color: #0A1F44;
    margin: 0.5rem;
    padding: .7rem 1.75rem;
`;

const SongOptions = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    a, button{
        width: auto-fill;
        margin: 0.5rem;
        padding: 0.5rem;
        background-color: #0A1F44;
        color: #1E90FF;
        border: 0.25rem solid #1E90FF;
        border-radius: 0.75rem;
        transition: all 0.25s ease;
        align-self: center;
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;

        &:hover{
            background-color: #1E90FF;
            color: #fffaba;
            border: 0.25rem solid #1E90FF;
            border-radius: 0.75rem;
            transform: scale(1.05);
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