import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import libraryReducer from "../slices/librarySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type SearchAlbum = {
    idAlbum: string,
    strAlbum: string,
    strArtist: string,
    image: string,
    intYearReleased: string,
}

export const store = configureStore({
    reducer:{
        library:libraryReducer,
        search:searchReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



export default store;