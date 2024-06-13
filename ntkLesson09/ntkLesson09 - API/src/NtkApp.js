import {React, useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import NtkStudentList from './components/NtkStudentList';

function NtkApp() {
  
  // Sử dụng hàm useState của hook
  const [ntkStudentList, setNtkStudentList]=useState([]);
  // Get data from api
  const ntkGetStudent = async () => {
    try {
      const response = await axios.get("https://666a9cb47013419182d00dea.mockapi.io/api/ntkv1/ntkStudent");
      setNtkStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    ntkGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - Hook - API</h1>
      <hr/>
      <NtkStudentList renderNtkStudentList = {ntkStudentList} />
    </div>
  );
}

export default NtkApp;
