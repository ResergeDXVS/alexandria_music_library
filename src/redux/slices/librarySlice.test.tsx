import { SearchAlbum } from "../store/store";
import reducer, { addSong, removeSong } from "./librarySlice";

describe('Library Slice', () => {
    const initialState = {
        library:[],
    }
    it("should send initial state",()=>{
        const reduce = reducer(undefined,{type:""})
        expect(reduce).toEqual(initialState);
    });
    it("should add a song",()=>{
        const song:SearchAlbum = {
            idAlbum: "1",
            strAlbum: "Test Album",
            strArtist: "Test Artist",
            image: "string",
            intYearReleased: "2025",
        }
        const addsong = reducer(initialState,addSong(song));
        expect(addsong.library).toHaveLength(1);
        expect(addsong.library[0]).toEqual(song);
    });
    it("should remove a song",()=>{
        const songPreloaded = {
            library:[
                {
                    idAlbum: "1",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    image: "string",
                    intYearReleased: "2025",
                },
                {
                    idAlbum: "2",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    image: "string",
                    intYearReleased: "2025",
                }
            ]
        }
        const removedSong = reducer(songPreloaded,removeSong(
            {
                idAlbum: "1",
                strAlbum: "Test Album",
                strArtist: "Test Artist",
                image: "string",
                intYearReleased: "2025",
            },
        ));
        expect(removedSong.library).toHaveLength(1);
        expect(removedSong.library[0].idAlbum).toEqual("2");
    });
});