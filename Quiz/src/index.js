import React from "react";
import ReactDOM from "react-dom";
import './index.html';
import Question from './Question/question.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <Question text="What time is it?" />
        
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));

//////////////

import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<MyApp />, document.getElementById("root"))

