import React, { useState } from 'react';
import Cards from '../NewsCards/Cards';
import './BrowserPage.css';
import { Link } from 'react-router-dom'; 

function BrowserPage({ topNews }) {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredIndices, setFilteredIndices] = useState(
    topNews.map((_, index) => index) 
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    const query = e.target.value.toLowerCase();
    const filteredIndices = topNews
      .map((article, index) => ({
        index,
        titleMatches: article.title?.toLowerCase().includes(query),
        descriptionMatches: article.description?.toLowerCase().includes(query),
      }))
      .filter((article) => article.titleMatches || article.descriptionMatches)
      .map((article) => article.index);
  
    setFilteredIndices(filteredIndices);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          id="searchInput"
          placeholder="Search for news..."
          value={searchQuery} 
          onChange={handleSearchChange}
        />
      </div>
      <h1 className='browser-title'>Top Stories</h1>
      <div className="cards-container">
        {filteredIndices.map((index) => (
          <Link key={index} to={`/detailedview/${index}`} className="no-underline-link"> 
            <Cards
              source={topNews[index].source}
              author={topNews[index].author}
              title={topNews[index].title}
              description={topNews[index].description}
              url={topNews[index].url}
              urlToImage={topNews[index].urlToImage}
              publishedAt={topNews[index].publishedAt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrowserPage;


