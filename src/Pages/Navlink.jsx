import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Blog from './Blog'
import Gallery from './Gallery'
import Simulation from './Simulation'
import Videos from './Videos'
import Login from './Login'
import Register from './Register'
import Error from './Error'
const Navlink = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/news' element={<News/>}></Route>
            <Route exact path='/blog' element={<Blog/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
            <Route exact path='/explore/Gallery' element={<Gallery/>}></Route>
            <Route exact path='/explore/Simulation' element={<Simulation/>}></Route>
            <Route exact path='/explore/Videos' element={<Videos/>}></Route>
            
            <Route path='/*' element={<Error/>}></Route>
            
        </Routes>
    );
}
export default Navlink ;