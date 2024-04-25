import React, { Component } from 'react'
// Sủ lý xự kiện với props, state
export default class NTK_EventForm3 extends Component {
    constructor(props){
        super(props);
        // Tao doi tuong du lieu thong qua state
        this.state = {
            name:"Nguyễn Trực Kiên",
            job:"Student"
        }
    }
    // Hàm xử lý sự kiện
    handlechangeName = (ev)=>{
        this.setState({
            name:"K22CNT4-ReactsJs"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
            <h2>Thay đổi dữ liệu trong state</h2>
            <p>Dữ liệu: {this.state.name} - {this.state.job}</p>
            <button onClick={this.handlechangeName}>Thay đổi name</button>
      </div>
    )
  }
}
