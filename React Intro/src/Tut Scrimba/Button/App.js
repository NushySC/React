import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedin: true
        }
        this.handleClick = this.handleClick(this)

    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                loggedin: !prevState.loggedin
            }
        })
    }

    render() {
        let buttonText = this.state.loggedin ? "Log out" : "Log In"
            return (
        <div>
            <button onClick={this.handleClick}> {buttonText}
            </button>
        </div>
    )
    }
    }

    export default App