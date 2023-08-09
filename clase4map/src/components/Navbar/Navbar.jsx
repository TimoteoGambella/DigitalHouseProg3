import React from "react"
import NavbarElements from "../NavbarElements/NavbarElements"
import User from "../User/User"
import "./navbar.css"

function Navbar(props){
    return(
        <nav>
            <ul className="main-nav">
                {props.arrayNavbar.map((menu,idx) => <NavbarElements key={menu+idx} menu={menu}/>)}
            </ul>

            <User name="Timoteo Gambella"/>
        </nav>
    )
}

export default Navbar