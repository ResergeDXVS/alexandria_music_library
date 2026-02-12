import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import Library from ".";
import Theme from "../../theme";
import { useAppSelector } from "../../redux/store/store";



const mockDispatch = jest.fn();

jest.mock("../../redux/store/store", () => ({
    useAppDispatch: () => mockDispatch,
    useAppSelector:jest.fn(),
}));



describe("Library Component", () => {

	afterEach(() => {
		jest.clearAllMocks();
	});
	//Render de envio
	const renderWithProviders = () => {
		return render(
			<ThemeProvider theme={Theme}>
				<MemoryRouter>
                    <Library/>
				</MemoryRouter>
			</ThemeProvider>
		);
	};


    it("should render songs from library", () => {
        const mockedUseSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;


        mockedUseSelector.mockReturnValue([
            {
                idAlbum: "1",
                strAlbum: "Test Album",
                strArtist: "Test Artist",
                intYearReleased: "2020",
            },
        ]);

        renderWithProviders();
        const testStructure = screen.getByText("Mi biblioteca");
        const test01 = screen.getByText("Test Album");
        const test02 = screen.getByText("Test Artist");
        expect(testStructure).toBeInTheDocument();
        expect(test01).toBeInTheDocument();
        expect(test02).toBeInTheDocument();
    });

    it("should delete a song in the library", () =>{
        const mockedUseSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;


        mockedUseSelector.mockReturnValue([
            {
                idAlbum: "1",
                strAlbum: "Test Album",
                strArtist: "Test Artist",
                intYearReleased: "2020",
            },
        ]);

        renderWithProviders();
        const testButton = screen.getByText("Eliminar");
        fireEvent.click(testButton);
        expect(mockDispatch).toHaveBeenCalledTimes(1);

    })


	
});
