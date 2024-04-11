import React from 'react'

export default function Func_JSX_NguyenTrucKien(props) {
    const user = {
        name:"Nguyen Truc Kien",
        age:20
    }
  return (
    <div>
        <h2>Function Component Demo</h2>
        <h3>
            welcome to , {user.name} - {user.age}
         </h3>
         <hr/>
         <h3>Props:
            FullName: {props.fullName}  <br/>
            Age: {props.age}<br/>


         </h3>
    </div>
  )
}
