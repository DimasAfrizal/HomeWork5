import React from 'react';
import Search from '../Pages/Search/index';
import Home from "../Pages/Auth/index";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  
function AppRoute() {
    const accessToken = useSelector((state) => state.accessToken.value);
    return (
      <Router>
        <div className='navbar'>
          <div className='nav-right'>
            <h1/> LOGOS
          </div >
          <div className='nav-left'>
            <ul id='nav-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/createplaylist">Create Playlist</Link></li>
            </ul>
          </div >
        </div>
        <Switch>
          <div>
            <Route path='/' component={Home}></Route>
            <Route path='/createplaylist'>
              {accessToken !== undefined ? <Search /> : <Redirect to="/" />}
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
export default AppRoute;
  