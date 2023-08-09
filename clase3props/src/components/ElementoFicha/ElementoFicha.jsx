import React from "react";
import "./elementoFicha.css"

function ElementoFicha(props){
    return(
        <article className="data-detail">
            <div className="card-content">
                <h4>título de ficha</h4>
                <p>datos de ficha</p>
            </div>
            <i className={props.logo}></i>
        </article>
    )
}

export default ElementoFicha