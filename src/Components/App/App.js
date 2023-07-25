import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import BrowserPage from '../BrowserPage/BrowserPage';
import DetailedView from '../DetailedView/DetailedView';
import ErrorComponent from '../Error/Error';
import ProfileComponent from '../Profile/Profile';
import '../App/App.css';
import PageLoader from '../PageLoader/PageLoader';
import Header from '../Header/Header';
import mockData from '../utilities/mockData'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <PageLoader />;
  if (error) return <Navigate to="/error" replace />;

  return (
    <Router>
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<BrowserPage mockData={mockData} />} />
            <Route path="/detailedview" element={<DetailedView />} />
            <Route path="/error" element={<ErrorComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
