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
}

interface SearchProps {
    searchMusic:string,
}


const useFetchSearchAlbum = ({searchMusic}:SearchProps) =>{
    const [searchAlbumState,setSearchAlbumState] = useState<FetchAlbum>({
        album:[], 
        isLoading:true, 
        error:null
    });

    useEffect(() => {
        const fetchSearchAlbum = async () => {
            try {
                if (searchMusic.trim() === "") {
                    // búsqueda vacía → estado idle
                    setSearchAlbumState({
                        album: [],
                        isLoading: true,
                        error: null,
                    });
                }else{
                    const response = await axios.get(
                        `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchMusic}`
                    );
                    const music = response.data.album;

                    if (music && music.length>0) {
                        setSearchAlbumState({
                            album: music,
                            isLoading: false,
                            error: null,
                        });
                    } else {
                        setSearchAlbumState({
                            album: [],
                            isLoading: false,
                            error: `No se encontró música relacionada con la búsqueda "${searchMusic}"`,
                        });
                    }
                }

                
            } catch (error) {
            setSearchAlbumState({
                album: [],
                isLoading: false,
                error: "Error inesperado",
            });
            }
        };

        fetchSearchAlbum();
        }, [searchMusic]);


    return searchAlbumState;
}



export default useFetchSearchAlbum;