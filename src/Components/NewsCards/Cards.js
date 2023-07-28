import React from 'react';
import logo from '../assets/NewsBlend.png';
import './Cards.css';
import { getFormattedDate, renderDescription, renderImage } from '../utilities/cleaning.js';

const Cards = ({ author, title, description, urlToImage, publishedAt }) => {
  return (
    <div className="card-link-wrapper">
      <section className="card">
        <div className="card-header">
          <h3 className="article-card-title">{title}</h3>
          <h4 className="article-card-date">{getFormattedDate(publishedAt)}</h4>
        </div>
        <div className="card-body">
          <div className="article-card-image-author">
          {renderImage(urlToImage, "card-view-image")}
            {author && <p className="article-card-author">Written By: {author}</p>}
          </div>
          <div className="article-card-info">
          {renderDescription(description, "card-description")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;



