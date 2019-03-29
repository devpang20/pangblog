import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    const style = {
      backgroundColor : 'black',
      padding : '16px',
      color: 'white',
      fontSize: '25px' 
    };

    return (
      <MyName name ="리엑트 "style = {style}/>
    );
  }
}

export default App;
