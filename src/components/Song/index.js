import './style.css';
const Song = ({nameSong, artist, time}) => {

    return (
        <article className="song">
            <h3 className="song__name">{nameSong}</h3>
            <h4 className="song__artist">{artist}</h4>
            <p className="song__time">Tiempo: {time}</p>
        </article>
    );
};



export default Song;