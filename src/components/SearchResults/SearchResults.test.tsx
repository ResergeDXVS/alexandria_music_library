import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../redux/store/store";
import SearchResults from ".";
import SongDetail from "../Song/SongDetail";

const mockDispatch = jest.fn();


jest.mock("../../redux/store/store", () => ({
    useAppDispatch: () => mockDispatch,
    useAppSelector: jest.fn(),
}));


describe("Search Result",()=>{
    
	afterEach(() => {
		jest.clearAllMocks();
	});
	//Render de envio
	const renderWithProviders = (initialPath: string) => {
		return render(
			<ThemeProvider theme={Theme}>
				<MemoryRouter>
                    <Routes>
                        <Route path="/" element={<SearchResults />} />
                        <Route path="/song/:idAlbum" element={<div>Example</div>} />
                    </Routes>
				</MemoryRouter>
			</ThemeProvider>
		);
	};

    it("Should render the list structure",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [
                {
                    idAlbum: "1",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    intYearReleased: "2020",
                },
                ],
                loading: false,
                error: "",
                idle: false,
            },
            })
        );
        renderWithProviders("/");
        const title = screen.getByText("Busqueda");
        expect(title).toBeInTheDocument();
    });

    it("Should render the example list",()=>{
        
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [
                {
                    idAlbum: "1",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    intYearReleased: "2020",
                },
                ],
                loading: false,
                error: "",
                idle: false,
            },
            })
        );

        renderWithProviders("/");

        expect(screen.getByText("Busqueda")).toBeInTheDocument();
        expect(screen.getByText("Test Album")).toBeInTheDocument();
        expect(screen.getByText("Test Artist")).toBeInTheDocument();
    });

    it("should add a song in a library",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [
                {
                    idAlbum: "1",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    intYearReleased: "2020",
                },
                ],
                loading: false,
                error: "",
                idle: false,
            },
            })
        );

        renderWithProviders("/");
        const button = screen.getByText("Agregar a Biblioteca");
        fireEvent.click(button);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({"payload": {"idAlbum": "1", "intYearReleased": "2020", "strAlbum": "Test Album", "strArtist": "Test Artist"}, "type": "library/addSong"});
    });
    it("should send the song information",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [
                {
                    idAlbum: "1",
                    strAlbum: "Test Album",
                    strArtist: "Test Artist",
                    intYearReleased: "2020",
                },
                ],
                loading: false,
                error: "",
                idle: false,
            },
            })
        );

        renderWithProviders("/");
        const link = screen.getByText("Detalles del Album");
        fireEvent.click(link);
        const info = screen.getByText("Example");
        expect(info).toBeInTheDocument();
    });

    it("should send the main view",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [],
                loading: false,
                error: "",
                idle: true,
            },
            })
        );

        renderWithProviders("/");
        const title = screen.getByText("Busca tu canción");
        expect(title).toBeInTheDocument();
    });
    it("should send the loading view",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [],
                loading: true,
                error: "",
                idle: false,
            },
            })
        );

        renderWithProviders("/");
        const title = screen.getByText("Cargando");
        expect(title).toBeInTheDocument();
    });
    it("should send the error view",()=>{
        const mockedSelector = useAppSelector as jest.Mock;
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
            search: {
                results: [],
                loading: false,
                error: "Error obtenido",
                idle: false,
            },
            })
        );

        renderWithProviders("/");
        const error = screen.getByText("Error obtenido");
        expect(error).toBeInTheDocument();
    });
});