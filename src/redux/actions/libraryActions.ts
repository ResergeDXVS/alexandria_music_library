import { SearchAlbum } from "../store/store"

export const addSong = (song:SearchAlbum) => {
    return {
        type: "ADD_SONG",
        payload: song,
    }
}

export const removeSong = (id: string) =>{
    return{
        type: "REMOVE_SONG",
        payload: id,
    }
}
 