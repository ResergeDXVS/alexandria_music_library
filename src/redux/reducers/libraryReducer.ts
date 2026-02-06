import { SearchAlbum } from "../store/store";

export type LibraryState = {
  albums: SearchAlbum[];
};

const initialState:LibraryState  = {
    albums:[],
}

const libraryReducer = (state=initialState , action:any) => {
    switch(action.type){
        case "ADD_SONG":
            return {
                ...state,
                albums: [...state.albums,action.payload],
            }
        case "REMOVE_SONG":
            return {
                ...state,
                albums: state.albums.filter(song => song.idAlbum !== action.payload),
            }
        default:
            return state;
    }
}

export default libraryReducer;