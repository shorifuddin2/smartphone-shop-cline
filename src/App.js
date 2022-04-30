import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
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
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
    </div>
  )
  }
  export default App;