import { ThemeProvider } from "styled-components";
import Header from ".";
import Theme from "../../theme";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

//Mock para simular que se utilice el dispatch y navigate
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("../../redux/store/store", () => ({
    useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("Header Container",()=>{
    it("should render the header",()=>{
        render(
            <ThemeProvider theme={Theme}>
                <Header/>
            </ThemeProvider>
        );
        const aux = screen.getByText("Alexandria Music Library");
        expect(aux).toBeInTheDocument();
    });
    it("should navigate to the main view with the logo",()=>{
        render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
				    <Header/>
                </MemoryRouter>
            </ThemeProvider>
        );
        const aux = screen.getByText("Alexandria Music Library");
        fireEvent.click(aux.parentElement);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({"payload": undefined, "type": "search/resetResults"});

        // Verificar que navigate se llamó con "/"
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith("/");
    });
});