import React from "react";
import Song from "../Song";
import { LibraryCancel, LibraryContainer, LibraryList, LibrarySection, LibraryTitle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../../redux/actions/libraryActions";
import { SearchAlbum } from "../../redux/store/store";
import { RootState } from "../../redux/reducers";




const Library = () => {
    const dispatch = useDispatch();
    const selector = useSelector((song:RootState)=>song.library.albums);

    const deleteSong = (song:string) => {
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
                                <button onClick={()=>deleteSong(idAlbum)}>Eliminar</button>
                            </LibraryContainer>
                        );
                    })
                }
            </LibraryList>
        </LibrarySection>
    );
}

export default Library;