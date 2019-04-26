import React, { Component} from 'react'

class App extends Component {
constructor() {
    super()
    this.state = {
        count: 0
    }
    this.handleClick = this.handleClick.bind(this)
}
//use arrow funtions here to avoid the binding on te constructor
handleClick() {
//never modify the state directyl like with this.state++

//if you need to use a method in your class, you have to bind it or it will be undefined. See constructor.
//this.setState({count: 1}) passing an object, static

this.setState(prevState => {
    return {
        count: prevState.count + 1
    }
})

}

render() {
    return (
        <div>
            <h1>{this.state.count}</h1>
            <button
            onClick={this.handleClick}>Add!</button>
        </div>
    )
}
}

export default App