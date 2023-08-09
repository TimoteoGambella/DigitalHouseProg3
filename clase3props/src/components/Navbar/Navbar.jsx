import React from "react"
import NavbarElements from "../NavbarElements/NavbarElements"
import User from "../User/User"
import "./navbar.css"

function Navbar(){
    return(
        <nav>
            <ul className="main-nav">
                <NavbarElements menu="Menu 1"/>
                <NavbarElements menu="Menu 2"/>
                <NavbarElements menu="Menu 3"/>
                <NavbarElements menu="Menu 4"/>
            </ul>

            <User name="Timoteo Gambella"/>
        </nav>
    )
}

export default Navbar