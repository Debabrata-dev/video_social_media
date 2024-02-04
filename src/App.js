import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Home from './Components/Home';
import { Route,Routes } from "react-router-dom"
import Sidebar from './Components/Sidebar';
import { Search } from '@mui/icons-material';
import RecommendedVideo from './Components/RecommendedVideo';
import SearchPage from './Components/SearchPage';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/search/:search" element={<SearchPage/>}/>
      
    </Routes>
   
   </>
  );
}

export default App;














