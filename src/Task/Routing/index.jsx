// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Analytics from '../Pages/DaxhCom/Analytics';
import DataTable from '../Pages/DaxhCom/DataTable';
import Index from '../Index';
function IndexR() {
  return (
  
      <Routes>
         <Route path="/" element={<Index />} ></Route>
         <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/datatable" element={<DataTable/>} />
      </Routes>
   
  );
}

export default IndexR;
