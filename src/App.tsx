import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Graph from './components/Graph';


const App: React.FC = () => {
  const graphUrls: { [key: string]: string } = {
    cycleLowMultiple: 'https://charts.bitbo.io/cycle-low-multiple/', // replace with actual URLs
    yoy: 'https://charts.bitbo.io/price-year-over-year/',
    stockToIncome: 'https://charts.bitbo.io/stock-to-income/',
  };

  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px' }}>
            <li><Link to="/cycleLowMultiple">Cyle Low Multiple</Link></li>
            <li><Link to="/yoy">Year Over Year</Link></li>
            <li><Link to="/stockToIncome">Stock To Income</Link></li>
          </ul>
        </nav>

        <div style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/cycleLowMultiple" element={<Graph src={graphUrls.cycleLowMultiple} />} />
            <Route path="/yoy" element={<Graph src={graphUrls.yoy} />} />
            <Route path="/stockToIncome" element={<Graph src={graphUrls.stockToIncome} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;