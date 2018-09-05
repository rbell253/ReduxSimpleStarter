// Create a new component. This component should produce
// some HTML
//const is declaring a variable(over var) because it is saying that this variable
// will never change
const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
React.render(App);
