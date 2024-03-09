import React from 'react';
import Home from './new/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './new/pages/SignIn';
import SignUp from './new/pages/SignUp';
import Dashboard from './new/pages/Dashboard';
// import About from './pages/Abouts';
import Abouts from './new/pages/Abouts';
import Header from './new/pages/components/Header';
import Project from './new/pages/Project';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Abouts />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}