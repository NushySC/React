import React from 'react';
import ReactDOM from 'react-dom';
import Chapter from './Chapter/chapter.jsx';
import './index.scss';
import './index.html';


// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//             <Chapter />
//             </div>
//         )
//     }
// }

const App = () => (
  <div className="container">
    <h1>Courses</h1>
    <Chapter 
      day="Mo" 
      date="3.9." 
      title="React"
      summary="Difficult stuff that you are not going to understand explained super quickly. Please note that there will be no notes or any kind of support material on the website so you are on your own."
    />  
    <Chapter 
      day="Tu" 
      date="4.9." 
      title="More React"
      summary="Some other concepts thrown at you at max speed. If you can't follow, please Google it at home if you can remember what we talk about."
    />
    <Chapter 
      day="We" 
      date="5.9." 
      title="React stuff"
      summary="See some code in GitHub. Maybe. Maybe not. It might not work though because some installation packages are missing, missconfigured or because the code is full of typos.
      "
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
