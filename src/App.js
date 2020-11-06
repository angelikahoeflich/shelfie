import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';

function App() {
  return (
    <div>
        <Header/>
        <Dashboard>
          <Product/>
        </Dashboard>
        <Form/>
    </div>
  );
}

export default App;
