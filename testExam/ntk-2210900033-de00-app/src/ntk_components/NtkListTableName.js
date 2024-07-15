import React from 'react'

export default function NtkListTableName(renderNtkListTableName) {
    console.log("List:",renderNtkListTableName);
    // Hiển thị dữ liệu
    const ntkElementTableName = renderNtkListTableName.map((ntkItem,ntkIndex)=>{
        return(
            <tr key={ntkIndex}>
                <td>{ntkItem.ntkId}</td>
                <td>{ntkItem.ntkTbName}</td>
                <td>{ntkItem.ntkTbEmail}</td>
                <td>{ntkItem.ntkTbPhone}</td>
                <td>{ntkItem.ntkTbStatus ?"Active":"Non-Active"}</td>
                <td>Ntk: Chức năng</td>
            </tr>
        );
    })
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
                {ntkElementTableName}
            </tbody>
        </table>
    </div>
  )
}
