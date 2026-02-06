import { createStore } from "redux";
import rootReducers from "../reducers";

export type SearchAlbum = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    image: string,
    intYearReleased: string,
}

const store = createStore(
    rootReducers
);

export default store;