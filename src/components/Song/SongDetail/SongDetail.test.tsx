import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import useFetchTracks from "../../../hooks/useFetchTrack";
import Theme from "../../../theme";
import SongDetail from ".";

//Función jest para suplantar el fetch
jest.mock("../../../hooks/useFetchTrack", () => ({
	__esModule: true,
	default: jest.fn(),
}));


describe("SongDetail Component", () => {

	afterEach(() => {
		jest.clearAllMocks();
	});
	//Render de envio
	const renderWithProviders = (initialPath: string) => {
		return render(
			<ThemeProvider theme={Theme}>
				<MemoryRouter initialEntries={[initialPath]}>
					<Routes>
						<Route path="/album/:idAlbum" element={<SongDetail />} />
						<Route path="/album/" element={<SongDetail />} />
					</Routes>
				</MemoryRouter>
			</ThemeProvider>
		);
		};


	it("should send a incomplete URL", () => {
		(useFetchTracks as jest.Mock).mockReturnValue({
			album: null,
			isLoading: true,
			error: null,
		});
		renderWithProviders("/album/"); // ruta sin parámetro
		const msg = screen.getByText("No se encontró el parámetro en la URL");
		expect(msg).toBeInTheDocument();

	});

	it("should send the loading view", () => {
		(useFetchTracks as jest.Mock).mockReturnValue({
			album: null,
			isLoading: true,
			error: null,
		});

		renderWithProviders("/album/200");
		const msgAux = screen.getByText("Cargando");
		expect(msgAux).toBeInTheDocument();
	});

	it("should send the error view (connection or bad request)", () => {
		const error = "Error al cargar datos";
		(useFetchTracks as jest.Mock).mockReturnValue({
			album: null,
			isLoading: false,
			error: error,
		});
		renderWithProviders("/album/123");
		const msgAux = screen.getByText(error);
		expect(msgAux).toBeInTheDocument();
	});

	it("should return the song information", () => {
		const album = "Test Album";
		const artist = "Test Artist";
		const year = "2024";
		const genre = "Rock";
		const label = "Sony";
		(useFetchTracks as jest.Mock).mockReturnValue({
			album: {
				strAlbum: album,
				strArtist: artist,
				intYearReleased: year,
				strGenre: genre,
				strLabel: label,
				strAlbumThumb: "test.jpg",
			},
			isLoading: false,
			error: null,
		});

		renderWithProviders("/album/200");
		const genreNode = screen.getByText(genre);
		const labelNode = screen.getByText(label);
		const containerGenre = genreNode.parentElement;
		const containerLabel = labelNode.parentElement;
		expect(screen.getByText(album)).toBeInTheDocument();
		expect(screen.getByText(artist)).toBeInTheDocument();
		expect(screen.getByText(year)).toBeInTheDocument();
		expect(genreNode).toBeInTheDocument();
		expect(labelNode).toBeInTheDocument();

		expect(containerGenre).toHaveStyle("grid-area: genre");
		expect(containerLabel).toHaveStyle("grid-area: label");
		expect(containerGenre).toHaveStyle("justify-content: flex-start");
		expect(containerLabel).toHaveStyle("justify-content: flex-end");
	});

	it("should return the song information without genre and label", () => {
		const album = "Test Album";
		const artist = "Test Artist";
		const year = "2024";
		(useFetchTracks as jest.Mock).mockReturnValue({
			album: {
				strAlbum: album,
				strArtist: artist,
				intYearReleased: year,
				strGenre: null,
				strLabel: null,
				strAlbumThumb: "test.jpg",
			},
			isLoading: false,
			error: null,
		});

		renderWithProviders("/album/200");

		expect(screen.queryByText("Género:")).not.toBeInTheDocument();
		expect(screen.queryByText("Disquera:")).not.toBeInTheDocument();
	});
});
