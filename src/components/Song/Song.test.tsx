import React from "react";
import { render, screen } from "@testing-library/react";
import Song from ".";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";

describe("Song component",()=>{
    it("should return the song display view",()=>{
        const songAux = "Song Name";
        const artistAux = "Artist";
        const year = "2010";
        render(
            <ThemeProvider theme={Theme}>
                <Song 
                    nameSong={songAux}
                    artist={artistAux}
                    year={year}/>
            </ThemeProvider>
        );
        const data01 = screen.getByText(songAux);
        const data02 = screen.getByText(artistAux);
        const data03 = screen.getByText(`Año: ${year}`);
        expect(data01).toBeInTheDocument();
        expect(data02).toBeInTheDocument();
        expect(data03).toBeInTheDocument();
    });
});