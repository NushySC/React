import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
<div><h1>Hello, world</h1><p>This is a paragraph</p></div>, 

document.getElementById("root"))

//////////////

import React from "react"
import ReactDOM from "react-dom"
import './index.html';

// pass two parameters to the render method
ReactDOM.render(
  <ul>
  <li>One thing</li>
  <li> Another thing</li>
  <li> The last thing</li>
  </ul>,
  document.getElementById("root"))


  //// Functional components

  function MyApp() { // create function
      return (
        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
  ReactDOM.render ( //render function 
      <MyApp />,
      document.getElementById("root")
  )

////// I 
import React from "react"
import ReactDOM from "react-dom"

function MyInfo () {
  return (
    <div>
    <h1>Anuska</h1>
    <p>Vacation spots</p>
    <ul>
    <li>Thailand</li>
    <li>Indonesia</li>
    <li>China</li>
    </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))

/// create a footer for later user

   import React from "react"

   function Footer() {
      return ( <div>
           This is a footer.
       </div>
      )
   }



/// exporting functions to make the available across the aplication

import React from "react"
import ReactDOM from "react-dom"
import Footer from "./footer.js"

import App from "./App" //create different file



    //import components like this
import MyInfo from "./MyInfo.js" //from the current file. It won't work otherwise. Make sure to keep the folders organized.



   /// this is the different file

   import React from "react"
   
//see? It's here imported in this component!


///this changed to arrow functions if there si no need for states ->
// const App = (props) => (no need for return this)

   function App() {
       return (
       <div>
           <nav>
               <ul>
                   <li>One</li>
                   <li>Two</li>
               </ul>
           </nav>
           <main>
               This is the content.
           </main>
           <Footer />> 
       </div>
       )
   }

///////////////// In index.js

import React from "react"
import ReactDOM from "react"



///in App.ls
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

 function App() {
     return 
     (
         <>
         <Header />
         <Main />
         <Footer />
         </>
        
     )
 }

 /// Header example

 import React from "react"

 function Header () {
     return (
         <header>Bla</header>
     )
 }

 export default Header


 /////normal function

 function App() {
     return (
         <h1>Hello World</h1>
     )
 }
//with arrow functions
 const App = () => {
     return (
        <h1>Hello World</h1>
     )
 }

 //with arrow functions no need for return
 const App = () => <h1>Hello World</h1>
