import Song from "../Song/index";
import "./style.css";
const SearchResults = ({ list }) => {    
    return (
        <section className="musiclist">
            <div className="musiclist__title">
                <h2>Sugerencias</h2>
            </div>
            <div className="musiclist__songs">
                {
                    list.map(song => {
                        const {id, nameSong, artist, time} = song;
                        return(
                            <article className="border" key={id}>
                                <div className="song__container">
                                    <Song
                                        nameSong={nameSong} 
                                        artist={artist} 
                                        time={time}
                                    />
                                    <button className="song__addlibrary"> Agregar a Biblioteca</button>
                                </div>
                            </article>
                            
                        );
                    })
                }
            </div> 
        </section>
    );

};

export default SearchResults;
