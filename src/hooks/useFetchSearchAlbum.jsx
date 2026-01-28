import axios from "axios";
import { useState, useEffect } from "react";

type SearchAlbum = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    image: string,
    intYearReleased: string,
}


type FetchAlbum = {
    album: SearchAlbum[],
    isLoading: Boolean,
    error: string | null,
}



const useFetchSearchAlbum = ({search:string}) =>{
    const [searchAlbumState,setSearchAlbumState] = useState<FetchAlbum>({
        album:[], 
        isLoading:true, 
        error:null
    });

    useEffect(() =>{
        const fetchSearchAlbum = async () => {
            try{
                const response = await axios.get(`https://theaudiodb.com/api/v1/json/123/searchalbum.php?s=${search}`);
                setSearchAlbumState({
                    album:response.data.album,
                    isLoading:false,
                    error:false,
                });
            }catch (error){
                setSearchAlbumState({
                    album:[],
                    isLoading:false,
                    error:` ${error}`,
                });
            }
        }
        fetchSearchAlbum();
    },[]);

    return searchAlbumState;
}



export default useFetchSearchAlbum;