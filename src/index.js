import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
// declare our youtube api key
const API_KEY = ''

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce
// some HTML
// const is declaring a variable(over var) because it is saying that this variable
// will never change
// can use => in place of "function" to declare a function
class App extend component { 
  render() {
    return (
      <div>
       <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
