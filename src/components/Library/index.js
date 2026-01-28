
import Song from "../Song/index";
import "./style.css";

const Library = ({ libraryList }) => {
    return (
        <section className="library">
            <div className="library__cross">
                <i className="fi fi-rs-circle-x"></i>
            </div>
            <div className="library__title">
                <h2>Mi biblioteca</h2>
            </div>
            <div className="library__list">
                {
                    libraryList.map(song => {
                        const {id, nameSong, artist, time} = song;
                        return(
                            <div className="library__containter" key={id}>
                                <Song
                                    nameSong={nameSong} 
                                    artist={artist} 
                                    time={time}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Library;