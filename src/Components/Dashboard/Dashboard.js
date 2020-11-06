import React, { Component } from 'react'
import Product from '../Product/Product';

function Dashboard(props) {
  const mappedItems = props.inventoryList.map( (product) => {
    console.log(product)
    return (
      <Product 
        name={product.product_name}
        imageURL={product.imageURL}
        price={product.price}
      />
    )
    }
  )
    
    return (
      <div>
        {mappedItems}
      </div>
    )
  }

export default Dashboard;
