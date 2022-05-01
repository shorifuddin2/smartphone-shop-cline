import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Rechart from './components/Rechart/Rechart';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  // app
  return (
    <div>
       <Header></Header>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Rechart></Rechart>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
      <Footer className="mb-0"></Footer>
    </div>
  )
  }
  export default App;