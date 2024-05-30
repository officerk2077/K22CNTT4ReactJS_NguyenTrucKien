import React, { useState} from 'react'

export default function NtkProductAddOrEdit({ntkOnsubmit}) {
    const [ntk_productId, setNtk_productId] = useState('');
    const [ntk_productName, setNtk_productName] = useState('');
    const [ntk_quantity, setNtk_quantity] = useState('0');
    const [ntk_price, setNtk_price] = useState('0');

    const ntkHandleSubmit = (ntkEvent)=>{
        ntkEvent.preventDefault();
        let ntkProduct = {
            ntk_productId:ntk_productId,
            ntk_productName:ntk_productName,
            ntk_quantity:ntk_quantity,
            ntk_price:ntk_price,
        }
        ntkOnsubmit(ntkProduct)
    }
  return (
    <div className='col-md-6'>
      <h2>Thêm mới sản phẩm / Sửa đổi</h2>
      <hr/>
      <form>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Mã sản phẩm</span>
            <input type="text" className="form-control" placeholder="Mã sản phẩm"
                name='ntk_productId' value={ntk_productId}
                onChange={(ev)=>setNtk_productId(ev.target.value)}
                aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Tên sản phẩm</span>
            <input type="text" className="form-control" placeholder="Tên sản phẩm"
                name='ntk_productName' value={ntk_productName}
                onChange={(ev)=>setNtk_productName(ev.target.value)}
                aria-describedby="basic-addon2"/>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Số lượng</span>
            <input type="number" className="form-control" placeholder="Số Lượng"
                name='ntk_quantity' value={ntk_quantity}
                onChange={(ev)=>setNtk_quantity(ev.target.value)}
                aria-describedby="basic-addon3"/>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">Đơn giá</span>
            <input type="number" className="form-control" placeholder="Đơn giá"
                name='ntk_price' value={ntk_price}
                onChange={(ev)=>setNtk_price(ev.target.value)}
                aria-describedby="basic-addon4"/>
        </div>
        <button className='btn btn-primary' name='ntkBtnAction'
            onClick={ntkHandleSubmit}
            >Thêm mới</button>
            
      </form>
    </div>
  )
}
