import React, { useEffect, useState } from 'react';
import NtkListTableName from './ntk_components/NtkListTableName';
import axios from './ntk_apis/ntk-2210900033';
import NtkFormTableName from './ntk_components/NtkFormTableName';

export default function NtkApp() {
  // Đọc dữ liệu từ api
  const [ntkListTableName, setNtkListTableName] = useState([]);

  const ntkGetTableName = async () => {
    let ntkResp = await axios.get("ntkTableName");
    console.log("App list:", ntkResp.data);
    setNtkListTableName(ntkResp.data);
  };

  useEffect(() => {
    ntkGetTableName();
  }, []);

  // Hàm xoá
  const ntkHandleDelete = async (ntkId) => {
    await axios.delete("ntkTableName/" + ntkId);
    ntkGetTableName();
  };

  const ntkObjTableName = {
    
    "ntkTbName": "Nguyễn Trực Kiên",
    "ntkTbEmail": "wwwkienmario123@gmail.com",
    "ntkTbPhone": "0363789548",
    "ntkTbStatus": true,
    "ntkId": "  2210900033"
  };
  const [ntkTableName,setNtkTableName] = useState(ntkObjTableName);

  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Nguyễn Trực Kiên: 2210900033</h1>
      <hr />
      <NtkListTableName renderNtkListTableName={ntkListTableName} onNtkDelete={ntkHandleDelete} />
      <hr/>
      <NtkFormTableName renderntkTableName={ntkTableName}/>
    </div>
  );
}