import React from 'react'

export default function NtkStudentList({renderNtkStudentList}) {
    console.log("Data:",renderNtkStudentList);
    let ntkElement = renderNtkStudentList.map((ntkStudent, index) =>{
        return(
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{ntkStudent.ntkId}</td>
                <td>{ntkStudent.ntkName}</td>
                <td>{ntkStudent.ntkAge}</td>
                <td>{ntkStudent.ntkPhone}</td>
                <td>{ntkStudent.ntkEmail}</td>
                <td>{ntkStudent.ntkStatus}</td>
                <td>
                    Edit / Delete
                </td>
            </tr>
        )
    });
  return (
    <div>
       <h2>Danh sách sinh viên</h2>
<table className="table table-bordered">
  <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Mã sinh viên</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Tuổi</th>
        <th scope="col">Điện thoại</th>
        <th scope="col">Email</th>
        <th scope="col">Trạng thái</th>
        <th scope="col">Chức năng</th>
        </tr>
  </thead>
  <tbody>
        {ntkElement}
  </tbody>
</table>

    </div>
  )
}
