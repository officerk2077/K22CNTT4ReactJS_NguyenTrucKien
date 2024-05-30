import {React, useState} from 'react';
import './App.css';
import NtkListProduct from './components/NtkListProduct';
import NtkProductAddOrEdit from './components/NtkProductAddOrEdit';

function NtkApp() {
  // mock data
  const ntk_Products = [
    {
          ntk_productId:"2210900033"      
       ,  ntk_productName:"Nguyễn Trực Kiên"      
       ,  ntk_quantity: 15       
       ,  ntk_price: 1000
    },
    {
          ntk_productId:"P002"
        , ntk_productName:"IPhone 12"
        , ntk_quantity: 20
        , ntk_price: 1250
    },
    {
           ntk_productId:"P003"
        ,  ntk_productName:"IPhone 13"
        ,  ntk_quantity: 10
        ,  ntk_price: 1500
    },
  ]

  // Sử dụng hàm useState của hook
  const [ntkListProduct, setNtkListProducts] = useState(ntk_Products)


  const ntkHandleSubmit = (ntkProduct)=>{
    console.log("AddOrEdit:",ntkProduct);
    //Thêm vào ntkListProduct
    setNtkListProducts(ntkprev =>{
      return [
        ...ntkprev,
        ntkProduct
      ]
    })
  }
  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - Hook</h1>
      <hr/>
      <NtkListProduct renderNtkProducts = {ntkListProduct}/>
      <hr/>
      <NtkProductAddOrEdit ntkOnsubmit={ntkHandleSubmit}/>
    </div>
  );
}

export default NtkApp;
