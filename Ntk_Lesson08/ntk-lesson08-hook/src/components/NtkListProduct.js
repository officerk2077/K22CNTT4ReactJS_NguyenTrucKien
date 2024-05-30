import React from 'react'

export default function NtkListProduct({renderNtkProducts}) {
    console.log("List Products:",renderNtkProducts);

    let ntkElementProduct = renderNtkProducts.map((ntkProduct,index)=> {
        return(
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{ntkProduct.ntk_productId}</td>
                <td>{ntkProduct.ntk_productName}</td>
                <td>{ntkProduct.ntk_quantity}</td>
                <td>{ntkProduct.ntk_price}</td>
                <td>{ntkProduct.ntk_quantity*ntkProduct.ntk_price}</td>
                <td>
                    Edit | Delete
                </td>
            </tr>
            </>
        )
    })
  return (
    <div>
        <h2>DANH SÁCH SẢN PHẨM</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên Sản phẩm</th>
                    <th>Sổ lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {ntkElementProduct}
            </tbody>
        </table>
    </div>
  )
}
