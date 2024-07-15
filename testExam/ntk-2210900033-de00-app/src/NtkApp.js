import React, { useEffect, useState } from 'react'
import NtkListTableName from './ntk_components/NtkListTableName'
import axios from './ntk_apis/ntk-2210900033'

export default function NtkApp() {
  // Đọc dữ liệu từ api
  const [ntkListTableName,setNtkListTableName] = useState([])
  const ntkGetTableName = async ()=>{
    let ntkResp = await axios.get("ntkTableName");
    console.log("App list:",ntkResp.data);
    setNtkListTableName(ntkResp.data);
  }

  useEffect(()=>{
    ntkGetTableName();
  },[])

  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Nguyễn Trực Kiên: 2210900033</h1>
      <hr/>
      <NtkListTableName renderNtkListTableName={ntkListTableName}/>
    </div>
  )
}
