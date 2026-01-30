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

interface libraryProps{
    libraryList:SearchAlbum[],
}

const Library = ({ libraryList }:libraryProps) => {
    return (
        <section className="library">
            <div className="library__cross">
                <i className="fi fi-rs-circle-x"></i>
            </div>
            <div className="library__title">
                <h2>Mi biblioteca</h2>
            </div>
            <div className="library__list">
                {
                    libraryList.map(song => {
                        const {idAlbum, strAlbum, strArtist, intYearReleased} = song;
                        return(
                            <Link
                                to={`/song/${idAlbum}`} 
                                className="library__containter" 
                                key={idAlbum}>
                                <Song
                                    nameSong={strAlbum} 
                                    artist={strArtist} 
                                    year={intYearReleased}
                                />
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Library;