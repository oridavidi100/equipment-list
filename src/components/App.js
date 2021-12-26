import React from 'react';
import './App.css';
import Employe from './Employe';
import Equipment from './equipment';
import AddItem from './AddItem';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Employe />} />
          <Route
            path='/Equipment'
            element={
              <div>
                <Equipment /> <AddItem />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
