import './App.css';
import NtkListUsers from './components/NtkListUsers';
import axios from './api/ntkApi.js'
import { useEffect, useState } from 'react';

function NtkApp() {

  const [ntkListUsers,setNtkListUsers] = useState([]);

  // đọc dữ liệu từ api
  const ntkGetAllUsers = async () => {
    const ntkResponse = await axios.get("ntkUsers");
    console.log("Api Data:", ntkResponse.data);
    setNtkListUsers(ntkResponse.data)
  }

  
  useEffect(() => {
    ntkGetAllUsers();
    console.log("State Data:",ntkListUsers);
  }, [])

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <NtkListUsers renderNtkListUsers={ntkListUsers}/>
    </div>
  );
}

export default NtkApp;