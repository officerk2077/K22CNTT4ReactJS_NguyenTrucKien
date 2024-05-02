import React, { Component } from 'react'

export default class NtkForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Nguyen Truc Kien",
            age:"20",
            course:"Ntk-HTML6",
            gender:true
        }
    }

    ntkhandleChange = (event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    ntkhandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
        // Chuyen du lieu len App
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Student Name: </label>
                            <input  name='studentName'
                                    value={this.state.studentName}
                                    onChange={this.ntkhandleChange}/>
                        </div>
                        <div>
                        <label>Age: </label>
                            <input  name='age'
                                    value={this.state.age}
                                    onChange={this.ntkhandleChange}/>
                        </div>
                        <div>
                            <label>Gender: </label>
                            <input type='radio' name='gender' onChange={this.ntkhandleChange} value={true} checked={(this.state.gender===true)?'checked':''}/> Nam
                            <input type='radio' name='gender' onChange={this.ntkhandleChange} value={true} checked={(this.state.gender===true)?'checked':''}/> Nữ
                            <input type='radio' name='gender' onChange={this.ntkhandleChange} value={true} checked={(this.state.gender===true)?'checked':''}/> Eo Gi Bi Ti
                        </div>
                        <div>
                        <label>Course</label>
                        <select name='course' value={this.state.course}
                                onChange={this.ntkhandleChange}>
                            <option value={"Ntk-HTML6"}>Ntk-HTML6</option>
                            <option value={"Ntk-CSS4"}>Ntk-CSS4</option>
                            <option value={"Ntk-JS"}>Ntk-JS</option>
                            <option value={"Ntk-RJ"}>Ntk-ReactJs</option>
                        </select>
                        </div>

                        <button onClick={this.ntkhandleSubmit}>Submit</button>
                    </form>
            </div>
            );
        }
        }
