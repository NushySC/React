/// React Component is a function

function Button (props) {
    return <button type="submit">{props.label}</button>
}

ReactDOM.render(<Button label="Save" />, mountNode)

// ReactDOM is the destination 
// mountNode is a special variable
// Components name star always with a capital letter
// Props are the Components attributes
// The return is not HTML is JSX



/// Same as above but witout JSX, just pure React

function Button (props) {
    return React.createElement (
        "button",
        {type: "submit"},
        props.label
    );
}

ReactDOM.render (
    React.createElement(Button, { label: "Save"}), mountNode
);

// create.element is one of the 8 main functions in in the React top-level API.


///////////////////////////////////////////////////
// React createElemnt API

const InputForm = React.createElement (
    "form",
    {target: "blank", action: "https://google.com/search"},
    React.createElement("div", null, "Enter input and click Search"),
    React.createElement ("input", { name:"q", clasName: "input"}),
    React.createCElement (Button, { label: "Search"})
);

function Button (props) {
    return React.createElement (
        "button",
        {type: "submit"},
        props.label
    );
}

ReactDOM.render(InputForm, mountNode);

//InputForm is not a React Component is an element and we can use directly in the ReactDom.Render without <InputForm />


/////////////////////////////
// JSX create element (same as above)

const InputForm = 
<form target= "_blank" action="https://google.com/search">
<div>Enter input and click search</div>
<input name="q" className="input" />
<Button label="Search" />
 </form>;

 function Button (props) {
     return <button type="submit"> {props.label} </button>;
 }

 ReactDOM.render(InputForm, mountNode);


 ///JS JSX

 const RandomValue = () =>
 <div>
     { Math.floor(Math.random() * 100) }
 </div>

 ReactDOM.render(<RandomValue />, mountNode);

 //Any JS can go inside those curly braces, this is equivalent to ${} interpolation in JS template literals. BUT, you can't use if statements, onlt ternary operators because the former do not return a value.

 ///Variable are ok and objects are ok as well. A JS object is used inside curly braces which can make it look like double curly braces.

 //Object passed into the special React prop

 const ErrorDisplay = ({message}) => 
 <div style= { {color: 'red', backgroundColor: 'yellow'}}>
 {message}
 </div>

 ReactDOM.render (
     <errorDisplay message="These aren't the droids you're looking for" />, mountNode
 );


 //// Continue on https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2