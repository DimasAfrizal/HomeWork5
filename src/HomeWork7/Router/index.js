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
    
    const linkStyle = {
      margin: '10px 10px',
      textDecoration: "none",
      color: 'yellow',
    };

    return (
      <Router>
        <div className='navbar'>
          <div className='nav-right'>
            <h1> LOGOS </h1>
          </div >
          <div className='nav-left'>
            <Link  style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/createplaylist">Create Playlist</Link>
            
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
  