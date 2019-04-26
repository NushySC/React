import React from "react"
import ToDoItem from"./ToDoItem"
import toDoData from "./toDoData"


/// funtional component way
// function App() {
    
//     const todoItems = toDoData.map(item => <ToDoItem key={item.id} item={item} />)

//     return (
//         <div className="ToDoList">
//         {todoItems}           
//         </div>
//     )
// }

// export default App

//class component way. Now the toDOData goes to the state and it's mapped in the render method
export default class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            toDos: toDoData
        }
    
        this.handleChange = this.handleChange.bind(this)
    }

//this functions gets the item checked in and changes its state to completed or viceversa. Then this method gets passed in the render method to all the items

    handleChange(id) {
        this.setState(prevState => {
            const updatedToDos = prevState.toDos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                toDos: updatedToDos
            }
        })

        //console.log("Changed", id)
    }
    render() {

         const todoItems = this.state.toDos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
         return (
         <div className="ToDoList">
             {todoItems}       
         </div>
     )
 }
 }

