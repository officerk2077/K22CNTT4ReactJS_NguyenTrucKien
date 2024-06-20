import { useEffect, useState } from 'react';
import './App.css';
import NtkCategoryList from './components/NtkCategoryList';
import axios from './api/NtkApi';
import { NtkDelete } from './api/NtkApi';
import NtkCategoryForm from './components/NtkCategoryForm';


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
  const [ntkCategoryIsFrom, setNtkCategoryIsForm] = useState(false);
  // Dữ liệu form: add / edit
  let ntkCategoryInit = {
    ntkId:0,
    ntkCategoryName:"",
    ntkCategoryStatus:true
}
  const [ntkCategoryEdit, setNtkCategoryEdit] = useState(ntkCategoryInit);
  const ntkHandleAddNew = (param) =>{
    setNtkCategoryIsForm(param);
  }

  const ntkHandleCateforyCloseForm = (param) =>{
    setNtkCategoryIsForm(param);
  }

  const ntkHandleCategorySubmit = (param) =>{
    let id = ntkCategories[ntkCategories.length-1].ntkId;
    console.log("Mã",id);
    param.ntkId = id + 1;
    ntkCategories.push(param);
    setNtkCategories((prev)=>{
      return[...prev];
    })
    setNtkCategoryIsForm(false);
  }
  // Hàm xử lý sự kiện xoá một đối tượng category
  const ntkHandleDel = (ntkId)=>{
      console.log("App-Delete-ntkId:",ntkId);
      //xoá trên api
      // const ntkResponse = axios.delete(`https://667125e1e083e62ee43a43ba.mockapi.io/ntkApi/ntkv1/NtkCategory/${ntkId}`,ntkId);
      const ntkResponse = axios.delete(`NtkCategory/${ntkId}`,ntkId);
      console.log("App-Delete-ntkId:",ntkId);
      let ntkDelete = ntkCategories.filter(x=>x.tvcId !== ntkId);
      setNtkCategories(ntkDelete);
      console.log("Deleted:",ntkDelete);
      }

      // Sửa category
      const ntkHandleEdit = (ntkCategory)=>{
        setNtkCategoryEdit(ntkCategory)
        setNtkCategoryIsForm(true);  
      }
  return (
    <div className="container my-3 border">
      <h1 className='text-center'>NGUYỄN TRỰC KIÊN - Call API</h1>

      <NtkCategoryList renderNtkCategory = {ntkCategories}
                        onAddNew={ntkHandleAddNew} 
                        onNtkDelete={ntkHandleDel}
                        onNtkEdit={ntkHandleEdit}/>
      <hr/>
      {
        setNtkCategoryIsForm===true?<NtkCategoryForm
                        renderNtkCategory   = {ntkCategoryEdit}
                        onCloseForm = {ntkHandleCateforyCloseForm} 
                        onCategorySubmit = {ntkHandleCategorySubmit}
               
        />:""
      }
    </div>
  );
}

export default NtkApp;
