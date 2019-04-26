import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isfriendly: true,
            gender: "",
            favColor: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value       
        })
    }

    handleSubmit() {

    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.setState.firstName} {this.setState.lastName}</h1>
                <input type="text" value={this.state.firstName} name= "firstName" placeholder="First Name" onChange={this.handle.change} />
                <input type="text" value={this.state.lastName}  name="lastName" placeholder="Last Name" onChange={this.handle.change} />
                <textarea value={'Some default value'} onChange={this.handleChange} />
                <label><input type="checkbox" name ="isFriendly" checked={this.state.isfriendly} onChange={this.handleChange} />
                Is friendly?</label>

                <label><input type="radio" name ="gender" checked={this.state.gender === "male"} onChange={this.handleChange} />Male</label>
                <label><input type="radio" name ="gender" checked={this.state.gender === "female"} onChange={this.handleChange} />
                Female</label>

                {/* Formik, library for forms */}

                <select 
                value={this.state.favColor}
                onChange= {this.handleChange}
                name= "favColor">
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="yellow">Yellow</option>
                </select>
                
                <button>Submit</button>


            </form>       
        )
    }
}

export default App
