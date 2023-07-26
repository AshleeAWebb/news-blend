import React, { useState } from 'react';
import Cards from '../NewsCards/Cards';
import './BrowserPage.css';
import { Link } from 'react-router-dom'; 

function BrowserPage({ topNews }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNews = topNews.filter((article) => {
    const titleMatches = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatches = article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatches || descriptionMatches;
  });

  return (
    <div>
      <h1 className='browser-title'>Top Stories</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for news..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cards-container">
        {filteredNews.map((article, index) => (
          <Link key={index} to={`/detailedview/${index}`} className="no-underline-link"> 
            <Cards
              source={article.source}
              author={article.author}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrowserPage;

