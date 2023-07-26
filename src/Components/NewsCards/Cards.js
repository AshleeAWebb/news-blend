import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cards.css';

const Cards = ({ author, title, description, urlToImage, publishedAt }) => {
  const getFormattedDate = (publishedAt) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); 
  };

  return (
    <NavLink to={`/articles/${title}`} className="card-link-wrapper">
      <section className="card">
        <div className="card-header">
            <h3 className="article-card-title">{title}</h3>
            <h4 className="article-card-date">
              {getFormattedDate(publishedAt)}
            </h4>
        </div>
        <div className="card-body">
          <img className="card-image" src={urlToImage} alt='article images' />
          <div className="article-card-info">
            <p className="article-card-description">{description}</p>
            {author && <p className="article-card-author">Written By: {author}</p>}
          </div>
        </div>
      </section>
    </NavLink>
  );
};

export default Cards;

