import React from 'react'

export default function Tvc() {
    return (
        <div>
            <h1>Welcome to ReactJS</h1>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <p>Company: {props.company}</p>
        </div>
    )
}

