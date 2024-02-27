import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // assuming you have set up your Redux store in a file named store.js
import Header from './components/Header/Header';
import "./App.css";
import AdPost from './components/AdPost/AdPost';
import SideBar from './components/SideBar/SideBar'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';


export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        
          {/* <Header/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/post_ad' element={<AdPost />} />
          {/* <AdPost/> */}
        
      </Routes>
    </Provider>
  );
}
