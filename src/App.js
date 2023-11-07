import React from 'react';
import './index.css';
import './App.css';
 import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import About from './components/About';
import Pages from './components/Pages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from "./pages/Login";

function App(){
  return(
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Rootlayout/>}>
         <Route index element={<Home/>}/> 
         <Route path='about' element={<About/>}/>
         <Route path='pages' element={<Pages/>}/>
         <Route path='blog' element={<Blog/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='login' element={<Login/>}/>

       </Route>
     </Routes>
    
    </BrowserRouter>
    
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default App;