import axios from "axios";
import { useState, useEffect } from "react";

type InformationAlbum = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    intYearReleased: string,
    strGenre: string,
    strLabel: string,
    strAlbumThumb: string,
}


type FetchAlbum = {
    album: InformationAlbum | null,
    isLoading: boolean,
    error: string | null,
}

interface TracksProps {
    idAlbum:string,
}


const useFetchTracks= ({idAlbum}:TracksProps) =>{
    const [trackState,setTrackState] = useState<FetchAlbum>({
        album: null, 
        isLoading:true, 
        error:null
    });

    useEffect(() => {
        const fetchSearchAlbum = async () => {
            try {
                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${idAlbum}`);
                const music = response.data.album[0];
                if (music) {
                    setTrackState({
                        album: music,
                        isLoading: false,
                        error: null,
                    });
                } else {
                    setTrackState({
                        album: null,
                        isLoading: false,
                        error: `Hubo un error con la busqueda.`,
                    });
                } 
            } catch (error) {
                setTrackState({
                    album: null,
                    isLoading: false,
                    error: "Error inesperado",
                });
            }
        };

        fetchSearchAlbum();
        }, [idAlbum]);


    return trackState;
}



export default useFetchTracks;