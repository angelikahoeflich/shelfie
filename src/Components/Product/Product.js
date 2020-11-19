import React from 'react'

 function Product (props) {

  console.log("WTF PROPS!?", props)
    return (
      <div fuckyou={props.id} really="true">
        <h3>{props.name}</h3>
        
        <img src={props.imageURL} />
        <p>Price: {props.price}</p>
        <button onClick={props.deleteProduct}>Delete</button>
        <button onClick={}>Edit info</button>

      </div>
    )
  
}

export default Product;
