import React, { useState } from 'react';
import axios from '../ntk_apis/ntk-2210900033';

export default function NtkFormTableName({ ntkId, ntkTbName, ntkTbEmail, ntkTbPhone, ntkTbStatus }) {
  const [ntkIdState, setNtkIdState] = useState(ntkId);
  const [ntkTbNameState, setNtkTbNameState] = useState(ntkTbName);
  const [ntkTbEmailState, setNtkTbEmailState] = useState(ntkTbEmail);
  const [ntkTbPhoneState, setNtkTbPhoneState] = useState(ntkTbPhone);
  const [ntkTbStatusState, setNtkTbStatusState] = useState(ntkTbStatus);

  const ntkHandleSubmit = async (ntkEvent)=>{
    ntkEvent.preventDefault();
    const ntkObjTableName = {
      "ntkTbName": ntkTbName,
      "ntkTbEmail": ntkTbEmail,
      "ntkTbPhone": ntkTbPhone,
      "ntkTbStatus": ntkTbStatus,
      "ntkId": ntkId
    }
    console.log(ntkObjTableName);

    // thêm vào dữ liệu trong api
    await axios.post("ntktablename",ntkObjTableName);
  }
  return (
    <div>
      <h2>Form xử lý dữ liệu thêm mới</h2>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="ntkId">ntkId</span>
          <input 
            type="text" className="form-control" placeholder="ntkId"
            name='ntkId'
            value={ntkIdState}
            onChange={(ntkEv)=>setNtkIdState(ntkEv.target.value)} 
            aria-label="ntkId" 
            aria-describedby="ntkId"            
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="ntkTbName">ntkTbName</span>
          <input 
            type="text" className="form-control" placeholder="ntkTbName"
            name='ntkTbName'
            value={ntkTbNameState}
            onChange={(ntkEv)=>setNtkTbNameState(ntkEv.target.value)} 
            aria-label="ntkTbName" 
            aria-describedby="ntkTbName"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="ntkTbEmail">ntkTbEmail</span>
          <input 
            type="text" className="form-control" placeholder="wwwkienmario123@gmail.com"
            name='ntkTbEmail'
            value={ntkTbEmailState} 
            onChange={(ntkEv)=>setNtkTbEmailState(ntkEv.target.value)} 
            aria-label="ntkTbEmail" 
            aria-describedby="ntkTbEmail"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="ntkTbPhone">ntkTbPhone</span>
          <input 
            type="text" className="form-control" placeholder="0363789548"
            name='ntkTbPhone'
            value={ntkTbPhoneState} 
            onChange={(ntkEv)=>setNtkTbPhoneState(ntkEv.target.value)} 
            aria-label="ntkTbPhone" 
            aria-describedby="ntkTbPhone"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="ntkTbStatus">ntkTbStatus</span>
          <select 
            id='ntkTbStatus' 
            className='form-control'
            name='ntkTbStatus'
            value={ntkTbStatusState} 
            onChange={(ntkEv) => setNtkTbStatusState(ntkEv.target.value)}
          >
            <option value="true">Active</option>
            <option value="false">Non-Active</option>
          </select>
        </div>
        <button className='btn btn-primary my-3' name='btnNtkSave' onClick={ntkHandleSubmit}>Ntk:Save</button> 
      </form>
    </div>
  );
}