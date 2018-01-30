import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component{
  //define the state

constructor(props){
  super(props);

  this.state = {term:""};
}
  render(){
    return (
    <div>
  
    <input 
     value = {this.state.term}
    onChange = {event => this.setState({term:event.target.value})} />
     
    </div>
    );
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
