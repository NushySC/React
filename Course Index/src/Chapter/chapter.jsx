import React from 'react';
import './chapter.scss';
//import '../Date/date.jsx'


// change once you update the webpack
// export default class Chapter extends React.Component {

//   constructor(props){
//     super(props)

    
//     this.state= {
//       done:false,
//     };
//     }

export default class Chapter extends React.Component {
  state = {
    done: false,
  };

  handleDone = () => {
    this.setState(prev => {
      return { done: !prev.done };
    });
  }

    // handleDone() {
    //   this.setState (prev =>{
    //     return {done:!prev.done};
    //   })
    // }
    render() {
      const doneClass = this.state.done ? ' chapter__day--done' : '';
      
      return (
        <div className="chapter">
          <div 
            className={`chapter__day${doneClass}`}
            onClick={this.handleDone}>
            <div className="day__name">{this.props.day}</div>
            <div className="day__date">{this.props.date}</div>
          </div>
          <div className="chapter__lead">
            <div className="chapter__title">
              {this.props.title}
            </div>
            <div className="chapter__summary">
              {this.props.summary}
            </div>
          </div>
        </div>
      );
    }
  }

  //   this.state = {
  //     day: 'Wed',
  //     date: 'March 13th',
  //     title: 'React thingy',
  //     summary: 'React stuff we learn lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque pariatur voluptas est molestiae? Possimus tempora accusamus nam! Maiores doloribus et quod aliquid iste dolorem ipsa quasi veniam autem. Inventore, id!',
  //   };
  // }


//   render() {
//     return (
//       <div className="chapter">
//        <Date />
//        <div clasName="text">
//          <h1 className="title">{this.state.title}</h1>
//          <p clasName="summary">{this.state.summary}</p>
//        </div>
//       </div>
//     );
//   }
// }


/// in index map through the cousers array and return a component chapter for each. mapping objevt to compnents

///unwarpping an object to props 

  // class App extends React.Component (
  // state = {
  //   chapters: [],
  // }
  // componentDidMount() {
  // fetch('http//bootcamp.podloamar/api/courses')
  // }
  // render() {
  //   return (
  //     <div className="container">
  //     { this.state.chapters.map(chapter => <Chapter {...chapter /> }
  //     </div>
  //   );
  // }
  // }
  //   )


//{courses.map (chapter => <Chapter {...chapter} />}


//create quotes bootcamp.podlomar.org/api.quotes
//tomorrow routing and repeat