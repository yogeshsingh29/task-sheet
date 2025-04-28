import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserTable from './components/UserTable';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [inputUrl, setInputUrl] = useState('https://docs.google.com/spreadsheets/d/1fyYBACIj_Z6M1a-YmHO98gxcnPwhMrj6AwmdYOjiAlM/edit?usp=sharing');

  return (
    <BrowserRouter>
      <div className="app-container">
          <Routes>
            <Route path="/" element={<UserTable inputUrl={inputUrl} setInputUrl={setInputUrl} />} />
          </Routes>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;