import React, {Component} from 'react';
import './App.css';
import Forms from './sections/forms';

class App extends Component {

  constructor(){
    super();
    this.state = {mouseX: 0, mouseY: 0}
    // this.handleMouseMove = this.handleMouseMove.bind(this); o arrow function
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX: clientX, mouseY: clientY});
  }

  handleClick(e){
    console.log(e.nativeEvent);
    alert('Hi here!');
  }

  render(){
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
        <div style={{border: '1px solid #000', marginTop: 10, padding: 10}} onMouseMove={this.handleMouseMove}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
        <Forms />
      </div>
    );
  }

}

export default App;
