import React from "react";
import "./card.css"

function Card(props){
    return(
        <div className="character-card">
          <img src={props.logo} alt="" />
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href="#">Ver más</a>
      </div>
    )
}

export default Card