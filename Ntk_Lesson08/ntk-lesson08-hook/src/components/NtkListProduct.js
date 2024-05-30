import React from 'react'

export default function NtkListProduct({renderNtkProducts}) {
    console.log("List Products:",renderNtkProducts);
    let ntkTong=0;
    let ntkElementProduct = renderNtkProducts.map((ntkProduct,index)=> {
            ntkTong += ntkProduct.ntk_quantity*ntkProduct.ntk_price;
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
                    <button className='btn btn-success mx-1'>
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-danger mx-1'>
                        <i class="fa-solid fa-delete-left"></i>
                    </button>
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
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {ntkElementProduct}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={5} className='text-end'> Tổng cộng:</th>
                    <th colSpan={2} className='text-start'>
                        {ntkTong}
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
