import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import useFetchTracks from "../../../hooks/useFetchTrack";


const SongDetail = () => {

    const { idAlbum } = useParams<{ idAlbum: string }>();
    console.log("idAlbum:", idAlbum);


    const { album, isLoading, error } = useFetchTracks({ idAlbum: idAlbum ?? "" });
    if (!idAlbum) {
        return (
            <section className="error__song">
                <h2>No se encontró el parámetro en la URL</h2>
            </section>
        );
    }
    

    const songDetail = () => (
        <section className="songdetail">
            <div className="songdetail__image">
                <img
                    src={`${album?.strAlbumThumb}`}
                    alt={`${album?.strAlbum}`}
                ></img>
            </div>
            <div className={(album?.strGenre || album?.strLabel) ? "songdetail__details" : "songdetail__details__min"}>
                <h3 className="songdetail__title">Nombre del álbum: <b>{`${album?.strAlbum}`}</b></h3>
                <h4 className="songdetail__artist">Artista: <b>{`${album?.strArtist}`}</b></h4>
                <h5 className="songdetail__album">Año de salida: <b>{`${album?.intYearReleased}`}</b></h5>
                {
                    album?.strGenre && (
                        <div className="songdetail__genre">
                            <h4 className="songdetail__labels">
                                Género: 
                            </h4>
                            <h5 className="songdetail__genretext">{`${album?.strGenre}`}</h5>
                        </div>
                    )
                }
                {
                    album?.strLabel &&(
                        <div className="songdetail__label">
                            <h4 className="songdetail__labels">
                                Disquera: 
                            </h4>
                            <h5 className="songdetail__labeltext">{`${album.strLabel}`}</h5>
                        </div>
                    )
                }
                
                
            </div>
        </section>
    )

    const idleStruture = () => (
        <section className="idle__song">
            <h2>Cargando</h2>
        </section>
    );

    const errorStructure = () => (
        <section className="error__song">
            <h2>{error}</h2>
        </section>
    );

    const renderContent = () => {
        console.log(album)
        if(album) return songDetail();
        if (error) return errorStructure();
        if (isLoading) return idleStruture();
    }


    return(
        <>
        {renderContent ()}
        </>
    );
}

export default SongDetail;
