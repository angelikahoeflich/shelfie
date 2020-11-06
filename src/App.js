import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';

class App extends Component{
  constructor(){
    super()

    this.state = {
        inventoryList: [
          {imageURL: 'image',
            product_name: 'angelika',
            price: 12000000
        },
          {imageURL: 'image',
            product_name: 'christine',
            price: 12000000
        },
          {imageURL: 'image',
            product_name: 'wolfgang',
            price: 0
        }
        ]
    }
  }
  render(){
        return (
        <div>
            <Header/>
            <Dashboard inventoryList={this.state.inventoryList}>
            </Dashboard>
            <Form/>
        </div>
    );
  }
}

export default App;
