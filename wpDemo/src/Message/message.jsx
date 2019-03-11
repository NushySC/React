// import React from 'react';
// import './message.css';
// //import image from './img/goat.jpg';

// export default class Message extends React.Component {
//   render() {
//     return <div className="whatever"><h1>Hello Webpack</h1></div>;
//   }
// }

import React from 'react';
import './message.css';

export default class Message extends React.Component {
  handleClick() {
    alert(this.props.text);
  }

  render() {
    return (
      <div className="message">
        <div className="title">{this.props.title}</div>
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


// From Render

/// why is my image not showing?

/// run this from the http server not local host

// this.element = document.createElement('div');
// this.element.innerHTML = (
//   '<h1>Hello Webpack</h1>' + 
//   `<img src="/${image}" />`
// );
// return this.element;