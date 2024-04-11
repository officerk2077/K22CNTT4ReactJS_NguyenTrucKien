import React, { Component } from 'react';

class Class_NguyenTrucKien extends Component {
    constructor(props){
        super(props);
        this.state.={
            full.Name:"NguyenTrucKien",
            class:"K22CNTT4"
        }
    }
    user = {
        name:"Nguyen Truc Kien",
        age:20
    }
  render() {
    return (
      <div>
            <h2>Class component demo</h2>
            {this.user.name} - {this.user.age}

            <hr/>
            <h3>info: {this.props.info}</h3>
            <h3>Time: {this.props.time}</h3>
            <hr/>
            <h3>State:
                FullName: {this.state.fullName} -
                Class: {this.state.class}
            </h3>
      </div>
    );
  }
}

export default Class_NguyenTrucKien;

