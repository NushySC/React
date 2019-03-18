import React from "react"

export default class Search extends React.Component {
    render() {
        return (
            <nav className="filter">
                    <label forHtml="filter">Filter</label>
                    <input type="text" name="filter" id="filter" placeholder="enter search term"></input>
                </nav>
        )
    }
}