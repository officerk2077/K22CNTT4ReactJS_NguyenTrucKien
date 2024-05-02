import React, { Component } from 'react'

export default class NtkForm2 extends Component {
    // 1.
    constructor(props){
        super(props);
        this.state = {
            course:"Ntk-HTML6"
        }
    }
    // 3. hàm xử lý sự kiện
    ntkhandleChange = (event)=>{
        // cập nhật state
        this.setState({
            course:event.target.value
        })
    }
    // 4.
    ntkhandleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }
    render() {
    // 2.
    return (
      <div>
            <form onSubmit={this.ntkhandleSubmit}>
                <label>Course</label>
                <select value={this.state.course}
                        onChange={this.ntkhandleChange}>
                    <option value={"Ntk-HTML6"}>Ntk-HTML6</option>
                    <option value={"Ntk-CSS4"}>Ntk-CSS4</option>
                    <option value={"Ntk-JS"}>Ntk-JS</option>
                    <option value={"Ntk-RJ"}>Ntk-ReactJs</option>
                </select>
                <input type='submit' value={"Submit"} />
            </form>
      </div>
    )
  }
}
