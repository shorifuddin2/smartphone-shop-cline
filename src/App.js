import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import AddItems from './components/AddItems/AddItems';
import MyItems from './components/MyItems/MyItems';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Manage from './components/MyItems/ManageItems/ManageItems';
import ManageItems from './components/MyItems/ManageItems/ManageItems';

const App = () => {
  // app
  return (
    <div>
       <Header></Header>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory' element={<ManageItems></ManageItems>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
      
      <Footer className=""></Footer>
    </div>
  )
  }
  export default App;