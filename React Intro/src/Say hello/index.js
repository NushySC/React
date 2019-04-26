import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new date()
    const hours = date.getHours()
    let timeOfDay


if (hours < 12) {
    timeOfDay = "morning"
    style.color= "#2E0278"
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
} else {
    timeOfDay = "evening"
}

const styles = {
    color: "#FF7968",
    backgroundColor: "#fff",
    fontSize: "20px", //in a string
}

return (
    //Inline styles have to be wrapped in {} but also JS need to be inside {} as it is an object
    //background color needs to be in camelCase or it won't work with the dash


    // <h1 style={styles}> Good {timeOfDay}</h1>
    //see above for trick(make a const)
    <h1 style {{color: "#FF7968", backgroundColor: "#ffff"}}> Good {timeOfDay}</h1>
)
}