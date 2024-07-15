import React from 'react';

export default function NtkListTableName({ renderNtkListTableName, onNtkDelete }) {
  console.log("List:", renderNtkListTableName);

  // Sự kiện xoá 
  const ntkHandleDelete = (ntkId) => {
    if (window.confirm('Bạn có muốn xoá dữ liệu có ntkId=' + ntkId)) {
      onNtkDelete(ntkId);
    }
  };

  // Hiển thị dữ liệu
  const ntkElementTableName = Array.isArray(renderNtkListTableName) ? 
    renderNtkListTableName.map((ntkItem, ntkIndex) => (
      <tr key={ntkIndex}>
        <td>{ntkItem.ntkId}</td>
        <td>{ntkItem.ntkTbName}</td>
        <td>{ntkItem.ntkTbEmail}</td>
        <td>{ntkItem.ntkTbPhone}</td>
        <td>{ntkItem.ntkTbStatus ? "Active" : "Non-Active"}</td>
        <td>
          <button className='btn btn-success m-2'>ntk-edit</button>
        </td>
        <td>
          <button
            className='btn btn-danger m-2'
            onClick={() => ntkHandleDelete(ntkItem.ntkId)}
          >
            ntk-delete
          </button>
        </td>
      </tr>
    )) : null;

  return (
    <div>
      <h2>Danh sách thông tin....</h2>
      <hr />
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
  );
}