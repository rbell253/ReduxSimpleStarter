import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// declare our youtube api key
const API_KEY = ''

// Create a new component. This component should produce
// some HTML
// const is declaring a variable(over var) because it is saying that this variable
// will never change
// can use => in place of "function" to declare a function
class App extends component { 
  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
       <SearchBar />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList 
        onVIdeoSelect={selectedVideo => this.setState({selectedVideo}) }  
        videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
