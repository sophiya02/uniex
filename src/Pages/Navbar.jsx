import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Navlink from './Navlink';

import { Tooltip, IconButton } from '@material-ui/core'
import {Input,HowToReg,Menu} from '@material-ui/icons';
const Navbar = () => {
    const [showMediaIcon, setShowMediaIcon]=useState(false);
    
    return (
        <>
            <nav className="main-nav position-fixed bg-light">
                <div className="logo">
                    <h2><span>U</span>niex</h2>
                </div>
                <div >
                    <ul className={showMediaIcon ? " mob-menu-link" : "menu-link"}>
                        <li className="menu-item-li">
                            <NavLink to='/' activeClassName="active" className="menu-item">Home</NavLink>
                        </li>
                        <li className="menu-item-li">
                            <NavLink to='/news' activeClassName="active" className="menu-item">News</NavLink>
                        </li>
                        <li className="menu-item-li">
                            <NavLink to='/blog' activeClassName="active" className="menu-item">Blog</NavLink>
                        </li>
                        <li className="menu-item-li">
                            <NavLink to='/explore/Gallery' activeClassName="active" className="menu-item">Gallery</NavLink>
                        </li>
                        <li className="menu-item-li">
                            <NavLink to='/explore/Simulation' activeClassName="active" className="menu-item">Simulation</NavLink>
                        </li>
                        <li className="menu-item-li">
                            <NavLink to='/explore/Videos' activeClassName="active" className="menu-item">Videos</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="log-reg">
                    <ul className="log-reg">
                        <li className="log-reg-li">
                            <NavLink to='/login' activeClassName="active"><Tooltip title="Login">
                                <IconButton >
                                    <Input className="log"/>
                                </IconButton>
                            </Tooltip></NavLink>
                        </li>
                        <li className="log-reg-li">
                            <NavLink to='/register' activeClassName="active"><Tooltip title="Register">
                                <IconButton >
                                    <HowToReg className="reg"/>
                                </IconButton>
                            </Tooltip></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-icon">
                        <button onClick={()=>{setShowMediaIcon(!showMediaIcon);
                        console.log(showMediaIcon);}}> 
                            <Menu className="hamburger"/>
                        </button>
                </div>
            </nav>
            <Navlink/>
        </>
        
    );
    
}
export default Navbar;