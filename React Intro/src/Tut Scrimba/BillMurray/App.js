import React from "react"

function handleClick() {
    console.log("I was clicked")
}

 function App() {
     return (
         <div>
         <img onMouseOver={() => console.log("Hovered")} src="https://www.fillmurrata.com/200/100" />
         <br />
         <button onClick={handleClick}>Click me </button>
         </div>
     )
 }

 export default App

 