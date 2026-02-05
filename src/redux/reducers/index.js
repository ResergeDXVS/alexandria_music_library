import { combineReducers } from "redux";
import libraryReducer from "./libraryReducer";


const rootReducers = combineReducers({
    library:libraryReducer,
})

export default rootReducers;