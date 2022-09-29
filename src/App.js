
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardPage, SigninPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element= {<SigninPage />}></Route>
          <Route path ="/dashboard" element= {<DashboardPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
