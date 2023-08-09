import React from "react";
import fotoUsuario from "./user.jpg";
import "./user.css";

function User(props){
    return(
        <ul className="user">
            <li>
                {props.name} 
                <img src={fotoUsuario} alt="" />
            </li>
        </ul>
    )
}

export default User