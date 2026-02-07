import React from "react";
import Song from "../Song";
import { LibraryCancel, LibraryContainer, LibraryList, LibrarySection, LibraryTitle } from "./styles";
import { useSelector } from "react-redux";
import { RootState, SearchAlbum, useAppDispatch } from "../../redux/store/store";
import { removeSong } from "../../redux/slices/librarySlice";




const Library = () => {
    const dispatch = useAppDispatch();
    const selector = useSelector((song:RootState)=>song.library.library);

    const deleteSong = (song:SearchAlbum) => {
        console.log(song);
        dispatch(removeSong(song));
    }

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
                    selector.map((song:SearchAlbum) => {
                        const {idAlbum, strAlbum, strArtist, intYearReleased} = song;
                        return(
                            <LibraryContainer
                                key={idAlbum}>
                                <Song
                                    nameSong={strAlbum} 
                                    artist={strArtist} 
                                    year={intYearReleased}
                                />
                                <button onClick={()=>deleteSong(song)}>Eliminar</button>
                            </LibraryContainer>
                        );
                    })
                }
            </LibraryList>
        </LibrarySection>
    );
}

export default Library;