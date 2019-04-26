import React from "react"

export class Home extends React.Component {
    render() {
        let text = "Something"

        return (
            <div>
                <p>{text}</p>
                <p>
                    Your Name is {this.props.name}
                </p>
            </div>
        )
    }
}