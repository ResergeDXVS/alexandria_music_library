import React from "react";
import Song from "../Song";
import "./style.css";
import { Link } from "react-router-dom";

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
}


const SearchResults = ({ list, action, isLoading, error }: SearchResultProps) => {    
    const structure = () => (
        <>
            <div className="musiclist__title">
                <h2>Busqueda</h2>
            </div>
            <div className="musiclist__songs">
                {
                    list.map(song => {
                        const {idAlbum, strAlbum, strArtist, intYearReleased} = song;
                        return(
                            <article className="border" key={idAlbum}>
                                <div className="song__container">
                                    <Song
                                        nameSong={strAlbum} 
                                        artist={strArtist} 
                                        year={intYearReleased}
                                    />
                                    <div className="song__options">
                                        <Link
                                            className="song__details" 
                                            to={`/song/${idAlbum}`} >
                                                Detalles del Album
                                        </Link>

                                        <button 
                                            className="song__addlibrary"
                                            onClick={()=>action(song)}> 
                                            Agregar a Biblioteca
                                        </button>
                                    </div>
                                </div>
                            </article>
                            
                        );
                    })
                }  
            </div> 
        </>
    );

    const idleStruture = () => (
        <section className="idle">
            <h2>Busca tu canción</h2>
            <p>En un momento encontraremos la información</p>
        </section>
    );

    const errorStructure = () => (
        <section className="error">
            <h2>{error}</h2>
        </section>
    );

    const renderContent = () => {
        if(list && list.length>0) return structure();
        if (error) return errorStructure();
        if (isLoading) return idleStruture();
    }

    
    return (
        <section className="musiclist">
            {renderContent()}
        </section>
    );

};

export default SearchResults;
