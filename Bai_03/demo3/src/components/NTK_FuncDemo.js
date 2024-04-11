import React from 'react'

export default function NTK_FuncDemo(props) {
  return (
    <div>
       <hr/>
       <h2>Function Component Demo</h2>
       <h3> Sử dụng thuộc tính từ props</h3>
       <p>userName: {props.userName}</p>
       <p>fullName: {props.fullName}</p>
       <p>Age: {props.age}</p>
    </div>
  )
}
