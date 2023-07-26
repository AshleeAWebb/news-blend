// BrowserPage.js
import React from 'react';
import Cards from '../NewsCards/Cards';
import './BrowserPage.css';
import { Link } from 'react-router-dom'; 

function BrowserPage({ topNews }) {
  return (
    <div>
      <h1 className='browser-title'>Top Stories</h1>
      <div className="cards-container">
        {topNews.map((article, index) => (
          <Link key={index} to={`/detailedview/${index}`}> 
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

