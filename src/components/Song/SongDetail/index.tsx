import React, { useState } from "react";
import "./style.css";

const SongDetail = () => {
    return(
        <section className="songdetail">
            <div className="song__image">
                <img
                    src=""
                    alt="Song"
                ></img>
            </div>
            <div className="song__details">
                <h3 className="song__title">{}</h3>
                <h4 className="song__artist">{}</h4>
                <h5 className="song__album">{}</h5>
            </div>
        </section>
    );
}

export default SongDetail;
