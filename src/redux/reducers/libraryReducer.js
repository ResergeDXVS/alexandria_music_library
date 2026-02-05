const initialState  = {
    library:[],
}

const libraryReducer = (state=initialState , action) => {
    switch(action.type){
        case "ADD_SONG":
            return {
                ...state,
                library: [...state.library,action.payload],
            }
        case "REMOVE_SONG":
            return {
                ...state,
                library: state.library.filter(song => song.id !== action.payload),
            }
        default:
            return state;
    }
}

export default libraryReducer;