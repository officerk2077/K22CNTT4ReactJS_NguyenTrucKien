import React, { Component } from 'react'

export default class ntk_form1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Nguyễn Trực Kiên"
        }
    }
  render() {
    return (
      <div>
          <h2>Demo ReactJs Form - Text</h2>
          <form>
            <label>Student Name: </label>
            <input value={this.state.studentName}/>
            <button>Submit</button>
          </form>
      </div>
    );
  }
}
