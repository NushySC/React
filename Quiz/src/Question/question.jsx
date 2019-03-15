import React from 'react';
import './question.css';

export default class Question extends React.Component {
//   handleClick() {
//     alert(this.props.text);
//   }

  render() {
    return (
      <div className="question">
        <div className="text">{this.props.text}</div>
        <button 
          onClick={this.handleClick.bind(this)}
        >
          like
        </button>
      </div>  
    );
  }
}
