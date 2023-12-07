import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import Header from './components/header';
import Main from './page/MainPage/main';
import link from './utils/link';
import MyComponent from './components/mycomponent';


function App() {
  useEffect(()=>{
    link();
  },[]);
  return (
    <div className="App">
      {/* <MyComponent/> */}
      <Header/>
      <Routes>
        <Route path='/Portfolio/' element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
