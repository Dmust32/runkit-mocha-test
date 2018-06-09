import React, { Component } from 'react';
import './App.css';
import Embed from 'react-runkit'
import mocha from 'mocha'
import chai from 'chai'
import "../node_modules/mocha/mocha.css"

class App extends Component {
  
  render() {
    console.log(mocha)
    return (
      <div className="App">
      
      
        {/* <script src='https://embed.runkit.com'></script> */}
        <div className = 'editor'>
          <Embed />
        </div>
    <div id="mocha"></div>
      {/* <script src="node_modules/mocha/mocha.js"></script>
      <script src="node_modules/chai/chai.js"></script>
      {mocha.setup('bdd')} */}

   
   
      {/* {mocha.run()} */}
    

        </div>
    );
  }
}

export default App;
