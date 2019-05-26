import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Episodes from './routes/episodes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Episodes />
      </Router>
    </div>
  );
}

export default App;
