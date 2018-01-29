import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component
constructor(props){
  super(props);

  this.state = {term:""};
}
  render(){
    return <input onChange = {event => console.log(event.target.value)}/>;
  }

}


//
// class SearchBar extends Component{
//    render(){
//      return <input onChange={this.onInputChange}/>
//    }
//    onInputChange(event){
//      console.log(event.target.value);
//    }
//  }

export default SearchBar;
