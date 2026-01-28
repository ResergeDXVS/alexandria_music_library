import axios from "axios";
import { useState, useEffect } from "react";

type Album = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    strGenre: string,
    image: string,
    description: string,
}

type FetchAlbum = {
    album: Album[],
    isLoading: Boolean,
    error: string | null,
}



const useFetchAlbum = ({search:string}) =>{
    const [AlbumState,setAlbumState] = useState<FetchAlbum>({
        album:[], 
        isLoading:true, 
        error:null
    });

    useEffect(() =>{
        const fetchAlbum = async () => {
            try{
                const response = await axios.get(`https://theaudiodb.com/api/v1/json/2/album.php?m=${search}`);
                setAlbumState({
                    album:response.data.album,
                    isLoading:false,
                    error:false,
                });
            }catch (error){
                setAlbumState({
                    album:[],
                    isLoading:false,
                    error:` ${error}`,
                });
            }
        }
        fetchAlbum();
    },[]);

    return AlbumState;
}


export default useFetchAlbum;