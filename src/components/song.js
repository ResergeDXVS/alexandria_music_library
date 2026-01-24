import React, { Component } from "react";

class Song extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(`Canción "${this.props.nameSong}" \
de artista "${this.props.artist}" \
Agregada a la lista.`);
    }

    render() {
        return (
            <article className="border">
                <article className="song">
                    <h3 className="song__name">{this.props.nameSong}</h3>
                    <h4 className="song__artist">{this.props.artist}</h4>
                    <p className="song__time">Tiempo: {this.props.time}</p>
                </article>
            </article>
        );
    }
}

export default Song;