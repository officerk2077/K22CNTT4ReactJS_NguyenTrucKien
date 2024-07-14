import React from 'react'

export default function NtkListTableName(renderNtkListTableName) {
    console.log("List:",renderNtkListTableName);
  return (
    <div>
        <h2>Danh sách thông tin....</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ntkId</th>
                    <th>ntkTbName</th>
                    <th>ntkTbEmail</th>
                    <th>ntkTbPhone</th>
                    <th>ntkTbStatus</th>
                    <th>ntk: Chức năng</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}
