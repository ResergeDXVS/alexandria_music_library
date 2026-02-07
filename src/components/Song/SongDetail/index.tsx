import React from "react";
import { useParams } from "react-router-dom";
import useFetchTracks from "../../../hooks/useFetchTrack";
import { SongDetailAlbum, SongDetailArtist, SongDetailDivImage, SongDetailExtra, SongDetailSection, SongDetailStructure, SongDetailTitle } from "./styles";
import { MessageViewStructure } from "../../../theme/styles";


const SongDetail = () => {

    const { idAlbum } = useParams<{ idAlbum: string }>();
    console.log("idAlbum:", idAlbum);


    const { album, isLoading, error } = useFetchTracks({ idAlbum: idAlbum ?? "" });
    if (!idAlbum) {
        return (
            <MessageViewStructure adjustMessage={"error"}>
                <h2>No se encontró el parámetro en la URL</h2>
            </MessageViewStructure>
        );
    }
    

    const songDetail = () => (
        <SongDetailSection>
            <SongDetailDivImage>
                <img
                    src={`${album?.strAlbumThumb}`}
                    alt={`${album?.strAlbum}`}
                ></img>
            </SongDetailDivImage>
            <SongDetailStructure 
                checkStructure={!!(album?.strGenre || album?.strLabel)}>
                <SongDetailTitle>
                    Nombre del álbum: <b>{`${album?.strAlbum}`}</b>
                </SongDetailTitle>
                <SongDetailArtist>
                    Artista: <b>{`${album?.strArtist}`}</b>
                </SongDetailArtist>
                <SongDetailAlbum>
                    Año de salida: <b>{`${album?.intYearReleased}`}</b>
                </SongDetailAlbum>
                {
                    album?.strGenre && (
                        <SongDetailExtra areaName={'genre'}>
                            <h4>
                                Género: 
                            </h4>
                            <h5>
                                {`${album?.strGenre}`}
                            </h5>
                        </SongDetailExtra>
                    )
                }
                {
                    album?.strLabel &&(
                        <SongDetailExtra areaName={'album'}>
                            <h4>
                                Disquera: 
                            </h4>
                            <h5>
                                {`${album.strLabel}`}
                            </h5>
                        </SongDetailExtra>
                    )
                }
            </SongDetailStructure>
        </SongDetailSection>
    )

    const loadingStruture = () => (
        <MessageViewStructure adjustMessage={"loading"}>
            <div className="spinner-border" role="status"/>
            <h2>Cargando</h2>
        </MessageViewStructure>
    );

    const errorStructure = () => (
        <MessageViewStructure adjustMessage={"error"}>
            <h2>{error}</h2>
        </MessageViewStructure>
    );

    const renderContent = () => {
        console.log(album)
        if(album) return songDetail();
        if (error) return errorStructure();
        if (isLoading) return loadingStruture();
    }


    return(
        <>
        {renderContent ()}
        </>
    );
}

export default SongDetail;
