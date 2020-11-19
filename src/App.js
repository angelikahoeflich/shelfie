import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component{
  constructor(){
    super()

    this.state = {
        inventoryList: [],
        selectedProduct: null
  }
  this.updateInventory = this.updateInventory.bind(this);
  this.deleteProduct = this.deleteProduct.bind(this);
  
}
componentDidMount(){
  this.updateInventory();
}
deleteProduct(click){
  const product = click.target.parentElement;
  const id = product.getAttribute("fuckyou");
  Axios
    .delete(`http://localhost:5432/api/product/${id}`)
    .then( (res) => {
      console.log("res", res);
      this.updateInventory();
    })
    .catch( (err) => {console.log("err", err)});
  
}

handleEdit(){
  Axios.put('/')
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
            <div className="flex-errythang">
            <Dashboard className="wtf-2" 
              inventoryList={this.state.inventoryList}
              updateInventory={this.updateInventory}
              deleteProduct={this.deleteProduct}
              />
            <Form 
            selected={this.state.selectedProduct} className="wtf-3" 
            updateInventory={this.updateInventory}/>
            </div>
        </div>
    );
}
}

export default App;
