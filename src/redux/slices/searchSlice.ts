import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchAlbum } from "../store/store";

export const fetchSongs = createAsyncThunk<SearchAlbum[], string>(
    "search/fetchSongs",
    async (query) => {
        const response = await axios.get(
            `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${query}`
        );
        return response.data.album;
    }
);

export interface SearchState {
    results: SearchAlbum[],
    loading:boolean,
    error:string,
    idle:boolean
}

const initialState: SearchState = {
    results:[],
    loading: false,
    error: "",
    idle: true,
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        resetResults:(state)=>{
            state.results=[];
            state.loading = false;
            state.error = "";
            state.idle = true;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSongs.pending, (state,action)=>{
                state.results = [];
                state.loading = true;
                state.error = "";
                state.idle = false;
            })
            .addCase(fetchSongs.fulfilled, (state,action)=>{
                if(action.payload!==null){
                    state.results = action.payload;
                    state.loading = false;
                    state.error = "";
                    state.idle = false;
                }else{
                    state.results = [];
                    state.loading = false;
                    state.error = `No se encontró información del la busqueda "${action.meta.arg}".`;
                    state.idle = false;
                }
            })
            .addCase(fetchSongs.rejected, (state,action)=>{
                state.results = [];
                state.loading = false;
                state.error = `Ocurrió un error en la búsqueda`;
                state.idle = false;
            })
    }
})

export const { resetResults } = searchSlice.actions;
const { reducer: searchReducer } = searchSlice;
export default searchReducer;
