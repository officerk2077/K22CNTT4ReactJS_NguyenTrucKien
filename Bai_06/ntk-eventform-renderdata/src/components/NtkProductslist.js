import React, { Component } from 'react'

export default class NtkProductslist extends Component {

  render() {
    let {renderProducts} = this.props;
    console.log("Products",renderProducts);
    let fnstatus = (param)=>{
        if(param===1){
            return 'Active';
        }
        return 'Non-Active'
    }
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.status===1?'Active':'Non-Active'}</td> */}
                    <td>
                        {fnstatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
            <h2>Danh sách sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {elementProduct}
                </tbody>
            </table>
      </div>
    )
  }
}
