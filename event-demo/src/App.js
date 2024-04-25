import React, { Component } from 'react'
import NTK_EventForm1 from './components/NTK_EventForm1'
import NTK_EventForm2 from './components/NTK_EventForm2';
import NTK_EventForm3 from './components/NTK_EventForm3';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <NTK_EventForm1 />
        <NTK_EventForm2 />
        <NTK_EventForm3 />
      </div>
    );
  }
}