import React from "react"
import { render } from "react-dom"

import { header } from "./Home"
import { header } from "./Header"

class App extends React.Component {
    render () {
       let user = {
            name: "Anna",
            hobbies: ["Sports"]
        };

        return (
            <div className="container">
            <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
            <Header user={user}/>>
            </div>
            </div>
            <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Max"}/>>
            </div>
            </div>
            </div>
        )
    }

}

render (<App />, windown.getElementById("app"));