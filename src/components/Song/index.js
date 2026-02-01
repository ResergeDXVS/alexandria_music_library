import { SongArticle, SongArtist, SongName, SongYear } from './styles';
const Song = ({nameSong, artist, year}) => {
    return (
        <SongArticle>
            <SongName>{nameSong}</SongName>
            <SongArtist>{artist}</SongArtist>
            <SongYear>Año: {year}</SongYear>
        </SongArticle>
    );
};

export default Song;