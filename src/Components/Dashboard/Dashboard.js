import Axios from 'axios';
import React, { Component } from 'react'
import Product from '../Product/Product';

function Dashboard  (props) {

  const mappedItems = props.inventoryList.map( (product) => {
    console.log(product)
    return (
      <Product  key={product.id}
        id={product.id}
        name={product.name}
        imageURL={product.img}
        price={product.price}

        deleteProduct={props.deleteProduct}
      />
    )
  })
 
  return (
    <div>
      {mappedItems}
    </div>
  )
}



export default Dashboard;
