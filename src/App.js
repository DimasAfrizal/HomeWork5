import React, { Component }  from 'react';
import Auth from "./HomeWork7/Pages/Auth/index";
import "./styles.css";
import { Provider } from "react-redux";
import store from './HomeWork7/reduxThing/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Auth />
      </div>
    </Provider>
    
  );
}
