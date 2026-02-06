import { combineReducers } from "redux";
import libraryReducer from "./libraryReducer";


const rootReducers = combineReducers({
    library:libraryReducer,
})

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;