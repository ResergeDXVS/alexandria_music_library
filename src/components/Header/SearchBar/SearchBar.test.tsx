import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SearchBar from ".";
import Theme from "../../../theme";
import { fireEvent, render, screen } from "@testing-library/react";
import { fetchSongs } from "../../../redux/slices/searchSlice";

const mockDispatch = jest.fn();
jest.mock("../../../redux/store/store", () => ({
    useAppDispatch: () => mockDispatch,
}));


describe("Search Bar component",()=>{
    //Render de envio
    const renderWithProviders = () => {
        return render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    <SearchBar/>
                </MemoryRouter>
            </ThemeProvider>
        );
    };
    it("should render the component",()=>{
        renderWithProviders();
        const test01 = screen.getByPlaceholderText("Buscar artista");
        expect(test01).toBeInTheDocument();
    });

    it("should render the component",()=>{
        renderWithProviders();
        const test01 = screen.getByPlaceholderText("Buscar artista");
        fireEvent.change(test01,{target:{value:"TEST"}});
        expect(test01).toHaveValue("TEST");
    });
    it("should dispatch fetchSongs on submit", async () => {
        renderWithProviders();

        const input = screen.getByPlaceholderText("Buscar artista");
        const button = screen.getByRole("button");

        fireEvent.change(input, {
            target: { value: "TEST 02" },
        });

        fireEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
    });

});