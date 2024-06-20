import React, { useState } from 'react'
import axios from '../api/NtkApi';

export default function NtkCategoryForm({onCloseForm, onCategorySubmit}) {
    // state 
    const [ntkCategoryName,setNtkCategoryName] = useState("");
    const [ntkCategoryStatus,setNtkCategoryStatus] = useState(true);  

    const ntkHandleClose = () => {
        onCloseForm(false);
    }

    const ntkHandleSubmit = async (event)=>{
        event.preventDefault();
        let ntkCategory = {
            ntkId:0,
            ntkCategoryName:ntkCategoryName,
            ntkCategoryStatus:ntkCategoryStatus
        }
        console.log("ntkCategory",ntkCategory);
        await axios.post("NtkCategory",ntkCategory)
        onCategorySubmit(ntkCategory);
    }

  return (
    <div>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name</span>
            <input type="text" className="form-control" placeholder="Category Name" 
            aria-label="Category Name" aria-describedby="basic-addon1" 
            name='ntkCategoryName' value={ntkCategoryName} 
            onChange={(ev)=>setNtkCategoryName(ev.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Status</span>
            <select name='ntkCategoryStatus' value={ntkCategoryStatus} className="form-control" 
            onChange={(ev)=>setNtkCategoryStatus(ev.target.value)}>
                <option value={true}>Hiển Thị</option>
                <option value={false}>Tạm Khóa</option>
            </select>          
        </div>
        <button className='btn btn-success mb-3 m-2' onClick={ntkHandleSubmit}>Ghi lại</button>
        <button className='btn btn-danger mb-3 m-2' onClick={ntkHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
