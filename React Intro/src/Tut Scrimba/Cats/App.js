import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard
            contact={{name:"Mr. Cat", imgUrl:"http://placekitten.com/300/200"
        ,phone:"633501464", email:"cat@gmail"}} />
        </div>
    )
}

export default App