import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
// import {useState, useRef, useEffect} from 'react';
import Header from './components/header';
import Main from './page/MainPage/main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
