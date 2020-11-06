import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()

    this.state = {
      imageURL: '',
      productName: '',
      price: 0
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
   
    console.log('wtf')
  }

  handleCancel(click){
    this.setState({
      imageURL: '',
      productName: '',
      price: 0
    })
  }

  handleImageChange(event){
    this.setState({
      imageURL: event.target.value
    })
  }
  handleNameChange(event){
    this.setState({
      productName: event.target.value
    })
  }
  handlePriceChange(event){
    this.setState({
      price: event.target.value
    })
  }


  render() {
    const {imageURL, productName, price} = this.state;
    return (
      <div>
        <h2>Image URL: </h2>
        <input value={imageURL} onChange={this.handleImageChange}/>
        <h2>Product Name:</h2>
        <input value={productName} onChange={this.handleNameChange} />
        <h2>Price:</h2>
        <input value={price} onChange={this.handlePriceChange}/>
        <button onClick={this.handleCancel}>Cancel</button>
        <button>Add</button>
      </div>
    )
  }
}

export default Form;
