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

}
componentDidMount(){
  this.updateInventory();
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
            <Dashboard inventoryList={this.state.inventoryList}>
            </Dashboard>
            <Form updateInventory={this.updateInventory}/>
        </div>
    );
  }
}

export default App;
