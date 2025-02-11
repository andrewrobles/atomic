import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Auth from './components/Auth'
import Demo from './components/Demo'

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#d9ecf9', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App