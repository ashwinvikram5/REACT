import React from 'react';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import BankingSignUp from './Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<SignIn />} />
          <Route path='signup' element={<BankingSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;