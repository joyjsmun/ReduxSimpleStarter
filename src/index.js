import React from "react";
import ReactDom from "react-dom";
import SearchBar  from "./components/search_bar";

const API_KEY = 'AIzaSyBYa0Et0YG4NofVji1z9xEHndNjOYvsDLA';

// AIzaSyBYa0Et0YG4NofVji1z9xEHndNjOYvsDLA

//create new component. this component should produce
//some html





const App = () => {
    return (
            <div>
          <SearchBar />
          </div>
        );
      }



//take this component's generate HTML and put it
//on the page(in the DOM)


ReactDom.render(<App />, document.querySelector('.container'));
