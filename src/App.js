import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Routes from './components/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
