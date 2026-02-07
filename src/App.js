import React, { useEffect } from "react";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import { Routes, Route } from "react-router-dom";
import SongDetail from "./components/Song/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/index";
import GlobalStyle from "./theme/GlobalStyles";
import { MessageViewStructure } from "./theme/styles";
import Header from "./components/Header";



const App = () => {
	useEffect(() => {
		//Efecto de Biblioteca
		const library = document.querySelector("#library");
		const libraryButton = document.querySelector("#header__library");
		const crossButton = document.querySelector("#library__cross");

		if (libraryButton && crossButton) {
			libraryButton.addEventListener("click", () => {
				library.style.right= "0";
			});

			crossButton.addEventListener("click", () => {
				library.style.right= "-70%";
			});
		}
	},[]);





	// const addToLibrary = (song) => {
	// 	if (!library.find(item => item.idAlbum === song.idAlbum)) {
	// 		setLibrary([...library, song]);
	// 	}
	// };

	const errorJSX = () => {
		return (
		<MessageViewStructure>
			<h2>No se encontró la URL, favor de revisar.</h2>
		</MessageViewStructure>);
	}



	return (
		<ThemeProvider theme={Theme}>
      		<GlobalStyle/>
			<Header/>
			<div className="App">
				<Routes>
					<Route 
						path="/" 
						element={
							<SearchResults />
						}
					/>
					<Route 
						path="/song/:idAlbum" 
						element={<SongDetail />} 
					/>
					<Route path="*" element={errorJSX()}/> 
				</Routes>
				<Library/>
			</div>
		</ThemeProvider>
	);
	
}
export default App;
