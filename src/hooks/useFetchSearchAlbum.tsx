import axios from "axios";
import { useState, useEffect } from "react";

type SearchAlbum = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    intYearReleased: string,
}


type FetchAlbum = {
    album: SearchAlbum[],
    isLoading: boolean,
    error: string | null,
    initial: boolean
}

interface SearchProps {
    searchMusic:string,
}


const useFetchSearchAlbum = ({searchMusic}:SearchProps) =>{
    const [searchAlbumState,setSearchAlbumState] = useState<FetchAlbum>({
        album:[], 
        isLoading:true, 
        error:null,
        initial:true
    });

    useEffect(() => {
        const fetchSearchAlbum = async () => {
            try {
                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchMusic}`
                );
                const music = response.data.album;

                if (music && music.length>0) {
                    setSearchAlbumState({
                        album: music,
                        isLoading: false,
                        error: null,
                        initial: false,
                    });
                } else {
                    setSearchAlbumState({
                        album: [],
                        isLoading: false,
                        error: `No se encontró música relacionada con la búsqueda "${searchMusic}"`,
                        initial: false,
                    });
                }
            } catch (error) {
                setSearchAlbumState({
                    album: [],
                    isLoading: false,
                    error: "Error inesperado",
                    initial: false,
                });
            }
        };

        fetchSearchAlbum();
        }, [searchMusic]);


    return searchAlbumState;
}



export default useFetchSearchAlbum;