import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      printType: "",
      bookType: ""
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">Google Book Search</header>
      </div>
    );
  }
}