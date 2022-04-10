import React from 'react';
import AppRoute from "./HomeWork7/Router/index";
import "./styles.css";
import { Provider } from "react-redux";
import store from './HomeWork7/reduxThing/store';

export default function App() {
  
  
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Home/> */}
        <AppRoute/>
      </div>
    </Provider>
    
  );
}
