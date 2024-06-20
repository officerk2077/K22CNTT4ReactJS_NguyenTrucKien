import React from 'react'

export default function NtkCategoryList({renderNtkCategory, onAddNew, onNtkDelete, onNtkEdit}) {
  console.log("renderNtkCategory:",renderNtkCategory);

  let ntkCategoryElement = renderNtkCategory.map((ntkCategory,index) => {
    return(
      <tr key = {index}>
        <th>{index+1}</th>
        <td>{ntkCategory.ntkId}</td>
        <td>{ntkCategory.ntkCategoryName}</td>
        <td>{ntkCategory.ntkCategoryStatus===true?"Hiển Thị":"Tạm Khóa"}</td>
        <td>
            <button className='btn btn-danger' 
                  onClick={()=>ntkHandleDel(ntkCategory.ntkId)}>
              Delete
              </button>  
              <button className='btn btn-success'
                  onClick={()=>ntkHandleEdit(ntkCategory)}>
                Edit
              </button>
        </td>       
      </tr>
    )
  })

  const ntkHandleAdd = () => {
    onAddNew (true);
  }

  // Hàm xử lý sự kiện xoá
  const ntkHandleDel = (ntkId)=>{
    console.log("Delete:",ntkId);
    if(window.confirm('Bạn có thực sự muốn xoá Category có mã [' + ntkId + '] Không ?')){
      console.log("Delete:",ntkId);
      onNtkDelete(ntkId)
    }else{

    }
    
  }
  // xử kiện cho nút sửa
  const ntkHandleEdit = (ntkCategory)=>{
    onNtkEdit(ntkCategory);
  }
  return (
    <div className='container m-2'>
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã loại</th>
                <th>Tên loại</th>
                <th>Trạng thái</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
          {ntkCategoryElement}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={ntkHandleAdd}>Thêm mới</button>
    </div>
  )
}
