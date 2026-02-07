import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchAlbum } from "../store/store";

export interface LibraryState {
    library:SearchAlbum[],
}

const initialState: LibraryState = {
    library:[],
}

const librarySlice = createSlice({
    name:"library",
    initialState,
    reducers:{
        addSong:(state,action:PayloadAction<SearchAlbum>) => {
            const exist = state.library.some((song:SearchAlbum)=> song.idAlbum===action.payload.idAlbum);
            if (!exist) state.library.push(action.payload);
        },
        removeSong:(state,action:PayloadAction<SearchAlbum>) => {
            const list = { library: state.library.filter((song:SearchAlbum)=> song.idAlbum !== action.payload.idAlbum)};
            return list
        }
    },
})

export const { addSong, removeSong } = librarySlice.actions;
const { reducer: libraryReducer } = librarySlice;
export default libraryReducer;