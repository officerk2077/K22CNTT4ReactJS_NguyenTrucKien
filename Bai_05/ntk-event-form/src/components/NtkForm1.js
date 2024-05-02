import React, { Component } from 'react';

export default class NtkForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Nguyễn Trực Kiên"
    };
  }

  handleChange = (event) => {
    this.setState({
      studentName: event.target.value
    });
  }

  handleSubmit = (ev) => {
    console.log(ev);
    ev.preventDefault();
    alert(this.state.studentName)
  }

  render() {
    return (
      <div>
        <h2>Demo ReactJs Form - Text</h2>
        <form>
          <label>Student Name: </label>
          <input
            value={this.state.studentName}
            onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}