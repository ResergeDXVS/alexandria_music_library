import styled from "styled-components";

interface SongDetailStructureProps {
    checkStructure:boolean;
} 

interface SongDetailExtraProps {
    areaName:string;
}

const SongDetailSection = styled.section`
    margin: 5rem 8rem;
    padding:3rem;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.background.library};
    box-sizing: border-box;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 2rem;
`;

const SongDetailDivImage = styled.div`
    width:600px;
    height: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
    padding: 1.5rem;
    img{
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        border-bottom-left-radius: 2rem;
        border-top-right-radius: 2rem;
    }

`;

const SongDetailStructure = styled.div<SongDetailStructureProps>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);   
    grid-template-rows: ${props=>{
            return props.checkStructure ? 'repeat(4,1fr)':'repeat(3,1fr)';
        }};
    grid-template-areas: ${props=>{
        return props.checkStructure ? 
        `"title title"
        "artist artist"
        "album album"
        "genre label"`: 
        `"title title"
        "artist artist"
        "album album"`
    }};
    padding: 1.5rem;
    justify-content: space-between;
    align-items: center;
    border-left: 2px solid ${props => props.theme.colors.utils};
`;

const SongDetailTitle = styled.h3`
    grid-area: title;
    color: ${props => props.theme.colors.secondary};
    font-size: 3rem;
    font-weight: 500;
    line-height: 1;
    margin:0;
    text-transform: uppercase;
    text-align: left;
    b{
        font-weight: 900;
        color: ${props => props.theme.colors.utils};
        font-size:1.1em;
        font-weight: 500;
        line-height: 1;
        margin:0;
    }
`;

const SongDetailArtist = styled.h4`
    grid-area: artist;
    color: ${props => props.theme.colors.secondary};
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1;
    margin:0;
    text-transform: uppercase;
    text-align: left;
    b{
        font-weight: 900;
        color: ${props => props.theme.colors.utils};
        font-size:1.1em;
        font-weight: 500;
        line-height: 1;
        margin:0;
    }
`;

const SongDetailAlbum = styled.h4`
    grid-area:album;
    color: ${props => props.theme.colors.secondary};
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
    margin:0;
    text-transform: uppercase;
    text-align: left;
    b{
        font-weight: 900;
        color: ${props => props.theme.colors.utils};
        font-size:1.1em;
        font-weight: 500;
        line-height: 1;
        margin:0;
    }
`;

const SongDetailExtra = styled.div<SongDetailExtraProps>`
    grid-area:${props=>{
        const area = props.areaName 
        if (area==='genre') return 'genre';
        if (area==='label') return 'label';
    }};
    display: flex;
    flex-direction: row;
    justify-content: ${props=>{
        const area = props.areaName 
        if (area==='genre') return 'flex-start';
        if (area==='label') return 'flex-end';
    }};;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    gap:2rem;
    h4{
        grid-area:album;
        color: ${props => props.theme.colors.secondary};
        font-size: 1.7rem;
        font-weight: 500;
        line-height: 1;
        margin:0;
        text-transform: uppercase;
        text-align: justify;
    }
    h5{
        background-color: ${props => props.theme.colors.utils};
        color:${props => props.theme.colors.white};
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1;
        margin:0;
        text-transform: uppercase;
        text-align: center;
        border-radius: 1.5rem;
        padding: 0.55rem 0.75rem;
    }
`;



export {
    SongDetailSection,
    SongDetailDivImage,
    SongDetailStructure,
    SongDetailTitle,
    SongDetailArtist,
    SongDetailAlbum,
    SongDetailExtra
};