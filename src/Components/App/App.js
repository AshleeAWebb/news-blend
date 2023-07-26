// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BrowserPage from '../BrowserPage/BrowserPage';
import DetailedView from '../DetailedView/DetailedView';
import ErrorComponent from '../Error/Error';
import '../App/App.css';
import ProfileComponent from '..//Profile/Profile';
import PageLoader from '../PageLoader/PageLoader';
import Header from '../Header/Header';
import { getTopNews } from '../utilities/apiFetch'
import mockData from '../utilities/mockData';
import '../assets/fonts/font.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    getTopNews()
      .then(response => {
        setTopNews(response);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <PageLoader />;
  if (error) return <Navigate to="/error" replace />;

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<BrowserPage topNews={topNews} />} />
            <Route path="/detailedview/:index" element={<DetailedView topNews={topNews} />} />
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
