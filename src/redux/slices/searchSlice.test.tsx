import reducer, { resetResults, SearchState, fetchSongs } from "./searchSlice";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Search Slice', () => {
    const initialState: SearchState = {
        results:[],
        loading: false,
        error: "",
        idle: true,
    }
    it("should fetch songs successfully", async () => {
        const mockData = [
            {
            idAlbum: "1",
            strAlbum: "Test Album",
            strArtist: "Test Artist",
            intYearReleased: "2020",
            strGenre: "Rock",
            strLabel: "Test Label",
            strAlbumThumb: "image.jpg",
            },
        ];

        mockedAxios.get.mockResolvedValueOnce({ data: { album: mockData } });

        const dispatch = jest.fn();
        const getState = jest.fn();

        const thunk = fetchSongs("TestArtist");
        const result = await thunk(dispatch, getState, undefined);

        expect(mockedAxios.get).toHaveBeenCalledWith(
            "https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=TestArtist"
        );

        expect(result.type).toBe("search/fetchSongs/fulfilled");
        expect(result.payload).toEqual(mockData);
    });

    it("should remove a song",()=>{
        const songPreloaded:SearchState = {
            results:[
                {
                    idAlbum: "1",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    image: "string",
                    intYearReleased: "2025",
                },
            ],
            loading:false,
            error:"",
            idle:false,
        }
        const resetSong = reducer(songPreloaded,resetResults());
        expect(resetSong.results).toHaveLength(0);
        expect(resetSong.idle).toBe(true);
    });

    it("should prove extraReducer searchSlice pending",()=>{
        const action = { type: fetchSongs.pending.type };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBe("");
        expect(state.results).toHaveLength(0);
        expect(state.idle).toBe(false);
    });

    it("should prove extraReducer searchSlice fulfilled",()=>{
        const mockSongs = [
            { idAlbum: "1", strAlbum: "Test Album", strArtist: "Test Artist" },
        ];

        const action = { type: fetchSongs.fulfilled.type, payload: mockSongs };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("");
        expect(state.results).toHaveLength(1);
        expect(state.idle).toBe(false);
    });

    it("should prove extraReducer searchSlice fulfilled with atyload empty",()=>{


        const action = { type: fetchSongs.fulfilled.type, payload: [] };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).not.toBeNull();
        expect(state.results).toHaveLength(0);
        expect(state.idle).toBe(false);
    });

    it("should prove extraReducer searchSlice rejected",()=>{


        const action = { type: fetchSongs.rejected.type };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe(`Ocurrió un error en la búsqueda`);
        expect(state.results).toHaveLength(0);
        expect(state.idle).toBe(false);
    });
});