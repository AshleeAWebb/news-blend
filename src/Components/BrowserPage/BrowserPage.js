import React from 'react';
import Cards from '../NewsCards/Cards'; 
import './BrowserPage.css'; 

const BrowserPage = ({ mockData }) => {
  const articles = mockData.articles;

  return (
    <div>
      <h1 className='browser-title'>Top Stories</h1>
      <div className="cards-container">
        {articles.map((article, index) => (
          <Cards
            key={index}
            source={article.source}
            author={article.author}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowserPage;

