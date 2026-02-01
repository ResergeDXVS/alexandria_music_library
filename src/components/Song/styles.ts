import styled from "styled-components";

const SongArticle = styled.article`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "name time"
        "artist artist";
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    padding: .7rem 1.75rem;
    border-radius: 1rem;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
`;


const SongName = styled.h3`
    grid-area: name;
    color: #fffaba;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.25;
    text-align: left;
    margin:0;
    padding: 0;
    text-transform: capitalize;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SongArtist = styled.h4`
    grid-area: artist;
    color: #fffaba;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    text-align: left;
    margin:0;
    padding: 0;
    text-transform: capitalize;
    width: 100%;
    padding-left: 1.25rem;
`;

const SongYear = styled.p`
    grid-area: time;
    color: #fffaba;
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 1.2;
    text-align: right;
    margin:0;
    padding: 0;
    text-transform: uppercase;
    width: auto;
    padding-right: .75rem;
`;

export {
    SongArticle,
    SongName,
    SongArtist,
    SongYear
}