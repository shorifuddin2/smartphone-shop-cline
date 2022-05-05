import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Delivery from './components/Delivery/Delivery';
import Inventory from './components/Inventory/Inventory';

const App = () => {
  // app
  return (
    <div>
       <Header></Header>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/delivery' element={<Delivery></Delivery>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory' element={<requireAuth><Inventory></Inventory></requireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
      <Footer className="mb-0"></Footer>
    </div>
  )
  }
  export default App;