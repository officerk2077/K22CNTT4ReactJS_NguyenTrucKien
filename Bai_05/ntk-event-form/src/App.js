import React, { Component } from 'react';
import NtkForm1 from './components/NtkForm1';
import NtkForm2 from './components/NtkForm2';
import NtkForm3 from './components/NtkForm3';

export default class App extends Component {


  ntkSubmit = (param)=>{
    console.log("App",param)
  }
  render() {
    return (
      <div>
        <h1>Controlled Component ReactJs Form</h1>
        <NtkForm1 />
        <NtkForm2 />
        <hr/>
        <NtkForm3 onSubmit={this.ntkSubmit}/>
      </div>
    );
  }
}