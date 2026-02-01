import React from "react";
import Song from "../Song";
import { Link } from "react-router-dom";
import { MusicListBorder, MusicListSection, MusicListSongs, MusicListTitle, SongContainer, SongOptions } from "./styles";
import { MessageViewStructure } from "../../theme/styles";

type SearchAlbum = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    image: string,
    intYearReleased: string,
}


interface SearchResultProps {
    list:SearchAlbum[],
    action:any | null,
    isLoading: boolean,
    error:string | null,
    initial: boolean
}


const SearchResults = ({ list, action, isLoading, error, initial }: SearchResultProps) => {    
    const structure = () => (
        <>
            <MusicListTitle>
                <h2>Busqueda</h2>
            </MusicListTitle>
            <MusicListSongs>
                {
                    list.map(song => {
                        const {idAlbum, strAlbum, strArtist, intYearReleased} = song;
                        return(
                            <MusicListBorder key={idAlbum}>
                                <SongContainer>
                                    <Song
                                        nameSong={strAlbum} 
                                        artist={strArtist} 
                                        year={intYearReleased}
                                    />
                                    <SongOptions>
                                        <Link 
                                            to={`/song/${idAlbum}`} >
                                                Detalles del Album
                                        </Link>

                                        <button 
                                            onClick={()=>action(song)}> 
                                            Agregar a Biblioteca
                                        </button>
                                    </SongOptions>
                                </SongContainer>
                            </MusicListBorder>
                            
                        );
                    })
                }  
            </MusicListSongs> 
        </>
    );

    const idleStruture = () => (
        <MessageViewStructure>
            <h2>Cargando</h2>
        </MessageViewStructure>
    );

    const errorStructure = () => (
        <MessageViewStructure>
            <h2>{error}</h2>
        </MessageViewStructure>
    );
    const initialView = () => (
        <MessageViewStructure>
            <h2>Busca tu canción</h2>
            <p>En un momento encontraremos la información</p>
        </MessageViewStructure>
    )

    const renderContent = () => {
        if (initial) return initialView();
        if (list && list.length>0) return structure();
        if (isLoading) return idleStruture();
        if (error) return errorStructure();
    }

    
    return (
        <MusicListSection>
            {renderContent()}
        </MusicListSection>
    );

};

export default SearchResults;
