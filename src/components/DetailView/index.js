import React from "react";
import './DetailView.css'

const DetailView = ({ pokemon }) => {

    const {id, name, type, sprite, height, weight} = pokemon

    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt={sprite}/>
            <div className="data-wrapper">
                <p className="data-name">{name}</p>
                <p className="data-char">ID {id}</p>
                <p className="data-char">Type = {type}</p>
                <p className="data-char">Height = {height}</p>
                <p className="data-char">Weight = {weight}</p>
            </div>
        </section>
    )

}

export default DetailView