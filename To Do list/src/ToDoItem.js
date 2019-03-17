import React from "react"

// export default class ToDoItem extends React.Component{
//     
//     render() {
//         return (
//             <div className="toDoitem">
//                 <input type="checkbox" />
//         <p>{this.props.item.text}</p>
//             </div>
//         )
//     }
// }

function ToDoItem (props) {
    return(
        <div className="ToDoItem">
        <input 
        type="checkbox" checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}
        />
        <p> {props.item.text} </p>
        </div>
    )
}

export default ToDoItem