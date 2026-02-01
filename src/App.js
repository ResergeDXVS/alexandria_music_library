import React, { useEffect, useState } from "react";
import '../src/App.css';
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import { Routes, Route, useLocation } from "react-router-dom";
import SongDetail from "./components/Song/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/index";
import GlobalStyle from "./theme/GlobalStyles";
import Header from "./components/Header/index";
import { MessageViewStructure } from "./theme/styles";



const App = () => {
	const [searchSongs, setSearchSongs] = useState([]);
	const [library, setLibrary] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [initial, setInitial] = useState(true);
	const location = useLocation();
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

	useEffect(() => {
		if (location.state){
			setSearchSongs(location.state.list);
			setError(location.state.error);
			setIsLoading(location.state.isLoading);
			setInitial(location.state.initial);
		}
	}, [location]);



	const addToLibrary = (song) => {
		if (!library.find(item => item.idAlbum === song.idAlbum)) {
			setLibrary([...library, song]);
		}
	};

	const errorJSX = () => {
		return (
		<MessageViewStructure>
			<h2>No se encontró la URL, favor de revisar.</h2>
		</MessageViewStructure>);
	}



	return (
		<>
			<Header></Header>
			<div className="App">
				<Routes>
					<Route 
						path="/" 
						element={
							<SearchResults 
								list={searchSongs} 
								action={addToLibrary}
								isLoading={isLoading}
								error={error}
								initial={initial}
							/>
						}
					/>
					<Route 
						path="/song/:idAlbum" 
						element={<SongDetail />} 
					/>
					<Route path="*" element={errorJSX()}/> 
				</Routes>
				<Library libraryList={library}/>
			</div>
		</>
	);
	
}
export default App;
