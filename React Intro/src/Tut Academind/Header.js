import React from "react";
import { render } from "react-dom"

import { Header } from "./Header"
import { Home } from "./home"

export class Header extends React.Componet {
    render () {
        return(
            <nav className="navbar navbar-default">
            <div className="container">
            <div className="navbar-header">
            <ul className="nav navbar-nav">
            <li>
                <a href="#"> Home</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
        )
    }
}

render(<App/>, window.document.getElementById("app"));