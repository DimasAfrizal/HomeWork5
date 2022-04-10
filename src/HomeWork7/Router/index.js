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
        <div >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/createplaylist">Create Playlist</Link></li>
          </ul>
        </div>
        <Switch>
          <div className='App'>
            <Route path='/' component={Home}></Route>
            <Route path='/createplaylist'>
              {accessToken !== undefined ? <Search /> : <Redirect to="/" />}
            </Route>
            {/* <Route path='/login'>
              <Login />
            </Route> */}
          </div>
        </Switch>
      </Router>
    );
  }
  // <Route path="/:id"></Route>
export default AppRoute;
  