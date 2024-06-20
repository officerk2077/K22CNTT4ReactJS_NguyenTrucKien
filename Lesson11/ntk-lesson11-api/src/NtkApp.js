import { useEffect, useState } from 'react';
import './App.css';
import NtkCategoryList from './components/NtkCategoryList';
import axios from './api/NtkApi';
import NtkCategoryForm from './components/NtkCategoryForm';
import { logDOM } from '@testing-library/react';

function NtkApp() {
  // Lấy dữ liệu từ api
  const [ntkCategories,setNtkCategories] = useState([]);

  const getCategories = async () => {
    try {
      const ntkCateResponse = await axios.get("NtkCategory");
      setNtkCategories(ntkCateResponse.data);
    } catch (error) {
      console.log("Lỗi", error);
    }
  }

  useEffect(()=>{
    getCategories();
    console.log("ntkCategories:",ntkCategories);
  },[])

  // trạng thái form 
  const [ntkCateforyIsFrom, setNtkCateforyIsForm] = useState(false);

  const ntkHandleAddNew = (param) =>{
    setNtkCateforyIsForm(param);
  }

  const ntkHandleCateforyCloseForm = (param) =>{
    setNtkCateforyIsForm(param);
  }

  const ntkHandleCategorySubmit = (param) =>{
    let id = ntkCategories[ntkCategories.length-1].ntkId;
    console.log("Mã",id);
    param.ntkId = id + 1;
    ntkCategories.push(param);
    setNtkCategories((prev)=>{
      return[...prev];
    })
    setNtkCateforyIsForm(false);
  }
  // Hàm xử lý sự kiện xoá một đối tượng category
  const ntkHandleDel = (ntkId)=>{
      console.log("App-Delete-ntkId:",ntkId);
  }
  return (
    <div className="container my-3 border">
      <h1 className='text-center'>NGUYỄN TRỰC KIÊN - Call API</h1>

      <NtkCategoryList renderNtkCategory = {ntkCategories}
                        onAddNew={ntkHandleAddNew} 
                        onNtkDelete={ntkHandleDel}/>
      <hr/>
      {
        ntkCateforyIsFrom===true?
        <NtkCategoryForm 
        onCloseForm = {ntkHandleCateforyCloseForm} 
        onCategorySubmit = {ntkHandleCategorySubmit}       
        />:""
      }
    </div>
  );
}

export default NtkApp;
