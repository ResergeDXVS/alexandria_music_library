import React, { useEffect, useState } from "react";
import '../src/App.css';
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import { Routes, Route, useLocation } from "react-router-dom";
import SongDetail from "./components/Song/SongDetail";



const App = () => {
	const [searchSongs, setSearchSongs] = useState([]);
	const [library, setLibrary] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const location = useLocation();
	useEffect(() => {
		//Efecto de Biblioteca
		const library = document.querySelector(".library");
		const libraryButton = document.querySelector(".header__library");
		const crossButton = document.querySelector(".library__cross");

		if (libraryButton && crossButton) {
			libraryButton.addEventListener("click", () => {
				library.classList.add("library--show");
			});

			crossButton.addEventListener("click", () => {
				library.classList.remove("library--show");
			});
		}
	},[]);

	useEffect(() => {
		if (location.state){
			setSearchSongs(location.state.list);
			setError(location.state.error);
			setIsLoading(location.state.isLoading);
		}
	}, [location]);



	const addToLibrary = (song) => {
		if (!library.find(item => item.idAlbum === song.idAlbum)) {
			setLibrary([...library, song]);
		}
	};

	const errorJSX = () => {
		return (<section className="error">
			<h2>No se encontró el parámetro en la URL</h2>
		</section>);
	}

	return (
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
	);
	
}
export default App;
