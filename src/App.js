import React, { useEffect, useState } from "react";
import '../src/App.css';
import Header from './components/Header/index';
import SearchResults from "./components/SearchResults/index";
import Library from "./components/Library/index";



const App = () => {
	const [searchSongs, setSearchSongs] = useState([]);
	const [library, setLibrary] = useState([]);

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

		//Asignación inicial de canciones
        const fetchSongs = () => {
            const data = [
				{id:1,nameSong:"Bloodline",artist:"Alex Warren" ,time:"3:02"},
				{id:2,nameSong:"Training Season",artist:"Dua Lipa",time:"3:29"},
				{id:3,nameSong:"Artemis",artist:"Lindsey Stirling",time:"3:53"},
				{id:4,nameSong:"Titanum",artist:"David Guetta feat. Sia",time:"4:05"},
				{id:5,nameSong:"Nightlight",artist:"Illenium",time:"3:42"},
				{id:6,nameSong:"Tie Me Down",artist:"Gryffin feat. Elley Duhé",time:"3:38"},
				{id:7,nameSong:"Enemy",artist:"Imagine Dragons feat. JID",time:"2:53"},
				{id:8,nameSong:"High on Life",artist:"Martin Garrix feat. Bonn",time:"3:50"},
				{id:9,nameSong:"Please Please Please",artist:"Sabrina Carpenter",time:"3:06"},
				{id:10,nameSong:"Make you mine",artist:"Madison Beer",time:"3:41"},
				{id:11,nameSong:"Abracadabra",artist:"Lady Gaga",time:"3:43"},
				{id:12,nameSong:"My Songs Know What You Did In The Dark",artist:"Fall Out Boy",time:"3:06"},
			]
			setSearchSongs(data);
        }
		
        fetchSongs();
    },[]);

	useEffect(()=>{
		console.log(`Biblioteca actualizada. Cantidad de canciones ${library.length}`);
	},[library]);

	//Función para agregar los datos de las canciones de busqueda a la biblioteca de canciones
	const addToLibrary = (song) => {
		if (!library.find(item => item.id === song.id)) {
			setLibrary([...library, song]);
		}
	};

	return (
		<div className="App">
			<Header/>
			<main>
				<SearchResults list={searchSongs} action={addToLibrary}/>
			</main>
			<Library libraryList={library}/>
		</div>
	);
}


export default App;
