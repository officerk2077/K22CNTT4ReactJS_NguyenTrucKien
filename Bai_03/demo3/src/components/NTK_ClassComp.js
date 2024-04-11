import React, { Component } from 'react'

export default class NTK_ClassComp extends Component {
        constructor(props){
            super(props);
            // tạo đối tượng dữ liệu
            this.state = {
                firstName:"Trực",
                lastName:"Kiên",
                userName:"k22cnt4",
        }
    }

    // arrow function
    Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin chào: {props.fullName} - Bạn đã {this.props.age} tuổi. </h3>
            </div>
        );
    }

    listMember = ()=>{
        return (
            <>
                <this.Member fullName="Nguyễn Trực A" age="20"/>
                <this.Member fullName="Nguyễn Trực B" age="21"/>
                <this.Member fullName="Nguyễn Trực C" age="22"/>
                <this.Member fullName="Nguyễn Trực D" age="23"/>
            </>
        )
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <h2>Class Component Demo</h2>
            <hr/>
            <h3> Dữ liệu trong state </h3>
            <h4>Xin chào: {this.state.firstName} {this.state.lastName}</h4>
            <hr/>
            <h3> Dữ liệu từ props</h3>
            <p> company: {this.props.company}</p>
            <p> course: {this.props.course}</p>

            <hr/>
            <this.Member fullName="Nguyễn Trực Kiên" age="20" />
            <hr/>
            <this.listMember/>
      </div>
    )
  }
}
