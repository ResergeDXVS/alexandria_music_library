export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: {
            id: song.id,
        }
    }
}

export const removeSong = (id) =>{
    return{
        type: "REMOVE_SONG",
        payload: id,
    }
}
 