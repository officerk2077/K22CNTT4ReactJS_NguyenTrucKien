import React, { Component } from 'react'
import NtkProductslist from './components/NtkProductslist';
import NtkProductsadd from './components/NtkProductsadd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Nguyễn Trực Kiên', id: 2210900033 , status:1 },
        { title: 'Cabbage', id: 1, status:0 },
        { title: 'Garlic', id: 2, status:1 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status:1 },
      ]
    }
  }
  render() {
    return (
      <div className='container border mt-5'>
          <h1>Nguyễn Trực Kiên - Render Data - Event Form</h1>
          <hr/>
          <NtkProductslist renderProducts={this.state.products}/>
          <hr/>
          <NtkProductsadd/>
      </div>
    )
  }
}
