import React from 'react'

export default function NtkListUsers({renderNtkListUsers}) {
    console.log("NtkListUsers:",renderNtkListUsers);
    // Hiển thị dữ liệu
    let ntkElementUser = renderNtkListUsers.map((ntkUsers,index)=>{
        return(
            <>
                <tr>
                    <td>{ntkUsers.id}</td>
                    <td>{ntkUsers.UserName}</td>
                    <td>{ntkUsers.Password}</td>
                    <td>{ntkUsers.Email}</td>
                    <td>{ntkUsers.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {ntkElementUser}
                </tbody>
            </table>
        </div>
    </div>
  )
}
