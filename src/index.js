Import React from 'react';
Import ReactDOM from 'react-dom';

// declare our youtube api key
const API_KEY = ''

// Create a new component. This component should produce
// some HTML
// const is declaring a variable(over var) because it is saying that this variable
// will never change
// can use => in place of "function" to declare a function
const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('container'));
