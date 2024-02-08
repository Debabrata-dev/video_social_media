import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Therapist from './Components/Therapist/Therapist';
import Dashboard from './Components/Dashboard/Dashboard';
import Clint from './Components/Clint/Clint';
import { Route,Routes } from "react-router-dom"
import Wallet from './Components/Wallet/Wallet';
import Report from './Components/Report/Report';
import Footer from './Components/Footer/Footer';
import Setting from './Components/Setting/Setting';
import Notifaction from './Components/Notification/Notifaction';
function App() {
  return (
   <>
    {/* <Clint/> */}
    {/* <Therapist/> */}
    {/* <Dashboard/> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Client" element={<Clint/>}/>
      <Route path="/Therapist" element={<Therapist/>}/>
      <Route path="/Wallet" element={<Wallet/>}/>
      <Route path="/Report" element={<Report/>}/>
      <Route path="/Setting" element={<Setting/>}/>
      <Route path='/Notifaction' element={<Notifaction/>}/>
    </Routes>
  
   </>
  );
}

export default App;

