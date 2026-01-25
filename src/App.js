import React, { Component } from "react";
import Header from './components/Header/index';
import Song from './components/Song/index';
import '../src/App.css';
class App extends Component {
  
	componentDidMount() {
		setTimeout( () => {
			console.log("Lista de canciones cargada exitosamente.");
		},2000);
		
	}

	render() {
		return (
			<div className="App">
				<Header/>
				<main>
					<section className="musiclist">
						<div className="musiclist__title">
						<h2>Sugerencias</h2>
						</div>
						<div className="musiclist__songs">
						<Song nameSong="Bloodline" artist="Alex Warren" time="3:02" />
						<Song nameSong="Training Season" artist="Dua Lipa" time="3:29" />
						<Song nameSong="Artemis" artist="Lindsey Stirling" time="3:53" />
						<Song nameSong="Titanum" artist="David Guetta feat. Sia" time="4:05" />
						<Song nameSong="Nightlight" artist="Illenium" time="3:42" />
						<Song nameSong="Tie Me Down" artist="Gryffin feat. Elley Duhé" time="3:38" />
						<Song nameSong="Enemy" artist="Imagine Dragons feat. JID" time="2:53" />
						<Song nameSong="High on Life" artist="Martin Garrix feat. Bonn" time="3:50" />
						<Song nameSong="Please Please Please" artist="Sabrina Carpenter" time="3:06" />
						<Song nameSong="Make you mine" artist="Madison Beer" time="3:41" />
						<Song nameSong="Abracadabra" artist="Lady Gaga" time="3:43" />
						<Song nameSong="My Songs Know What You Did In The Dark" artist="Fall Out Boy" time="3:06" />
						</div>
					</section>
				</main>
			</div>
		);
	}
	}


	export default App;
