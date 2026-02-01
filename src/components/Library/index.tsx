import React from "react";
import Song from "../Song";
import { Link } from "react-router-dom";
import { LibraryCancel, LibraryList, LibrarySection, LibraryTitle } from "./styles";

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
        <LibrarySection id="library">
            <LibraryCancel id="library__cross">
                <i className="fi fi-rs-circle-x"></i>
            </LibraryCancel>
            <LibraryTitle>
                <h2>Mi biblioteca</h2>
            </LibraryTitle>
            <LibraryList>
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
            </LibraryList>
        </LibrarySection>
    );
}

export default Library;