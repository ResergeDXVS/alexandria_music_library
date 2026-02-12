import React from "react"
import useFetchTracks from "./useFetchTrack";
import { renderHook, waitFor } from "@testing-library/react";
const axios = require('axios');
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Fetch Track Hook",()=>{
    it("should send correct information", async () => {
        axios.get.mockResolvedValueOnce({
            data: {
                album: [
                    {
                    idAlbum: "2115888",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    intYearReleased: "2020",
                    strGenre: "Rock",
                    strLabel: "Test Label",
                    strAlbumThumb: "image.jpg",
                    },
                ],
            },
        });

        const { result } = renderHook(() =>
            useFetchTracks({ idAlbum: "2115888" })
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(axios.get).toHaveBeenCalledWith(
            "https://www.theaudiodb.com/api/v1/json/123/album.php?m=2115888"
        );

        expect(result.current.album?.strAlbum).toBe("Test Album");
    });


    it("should handle API error", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

        const { result } = renderHook(() =>
            useFetchTracks({ idAlbum: "2115888" })
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.album).toBeNull();
        expect(result.current.error).toBe("Error inesperado");
    });

    it("should handle API without song", async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                album: [],
            },
        });
        const { result } = renderHook(() =>
            useFetchTracks({ idAlbum: "2115888" })
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.album).toBeNull();
        expect(result.current.error).toBe("Hubo un error con la busqueda.");
    });
});