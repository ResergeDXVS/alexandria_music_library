import React from "react";
import Song from "../Song";
import { Link } from "react-router-dom";
import { MusicListBorder, MusicListSection, MusicListSongs, MusicListTitle, SongContainer, SongOptions } from "./styles";
import { MessageViewStructure } from "../../theme/styles";
import { SearchAlbum, useAppDispatch, useAppSelector } from "../../redux/store/store";
import { addSong } from "../../redux/slices/librarySlice";



const SearchResults = () => {  
    const dispatch = useAppDispatch();
    const results = useAppSelector((state)=>state.search.results);
    const isLoading = useAppSelector((state)=>state.search.loading);
    const error = useAppSelector((state)=>state.search.error);
    const idle = useAppSelector((state)=>state.search.idle);
    
    
    const addLibrary = (song:SearchAlbum) =>{
        dispatch(addSong(song));
    }

    
    const structure = () => (
        <>
            <MusicListTitle>
                <h2>Busqueda</h2>
            </MusicListTitle>
            <MusicListSongs>
                {
                    results && results.map((song:SearchAlbum) => {
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
                                            onClick={() => addLibrary(song)}> 
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

    const loadingStruture = () => (
        <MessageViewStructure $adjustMessage={"loading"}>
            <div className="spinner-border" role="status"/>
            <h2>Cargando</h2>
        </MessageViewStructure>
    );

    const errorStructure = () => (
        <MessageViewStructure $adjustMessage={"error"}>
            <h2>{error}</h2>
        </MessageViewStructure>
    );
    const initialView = () => (
        <MessageViewStructure $adjustMessage={"initial"}>
            <h2>Busca tu canción</h2>
            <p>En un momento encontraremos la información</p>
        </MessageViewStructure>
    )

    const renderContent = () => {
        if(idle) return initialView();
        if(isLoading && error==="") return loadingStruture();
        if(error!=="") return errorStructure();
        if(results) return structure();
    }

    
    return (
        <MusicListSection>
            {renderContent()}
        </MusicListSection>
    );

};

export default SearchResults;
