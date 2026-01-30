import React from "react";
import "./style.css";

const SongDetail = () => {
    return(
        <section className="songdetail">
            <div className="songdetail__image">
                <img
                    src=""
                    alt="Song"
                ></img>
            </div>
            <div className="songdetail__details">
                <h3 className="songdetail__title">{}</h3>
                <h4 className="songdetail__artist">{}</h4>
                <h5 className="songdetail__album">{}</h5>
            </div>
        </section>
    );
}

export default SongDetail;
