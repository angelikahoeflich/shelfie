import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';

class App extends Component{
  constructor(){
    super()

    this.state = {
        inventoryList: []
  }
  this.updateInventory = this.updateInventory.bind(this);
  this.deleteProduct = this.deleteProduct.bind(this);
  
}
componentDidMount(){
  this.updateInventory();
}
deleteProduct(click){
  console.log("click.target.parentElement", click.target.parentElement);
  const id = 5;
  Axios
    .delete(`http://localhost:5432/api/product/${id}`)
    .then( (res) => {console.log("res", res)})
    .catch( (err) => {console.log("err", err)});
  
}
updateInventory() {
  Axios
  .get("http://localhost:5432/api/inventory")
  .then((res) => {
    this.setState({
      inventoryList:res.data
    })
  })
}
    render(){
        return (
        <div>
            <Header/>
            <Dashboard 
              inventoryList={this.state.inventoryList}
              updateInventory={this.updateInventory}
              deleteProduct={this.deleteProduct}
              />
            <Form updateInventory={this.updateInventory}/>
        </div>
    );
  }
}

export default App;
