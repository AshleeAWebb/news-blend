import React from 'react';
import logo from '../assets/NewsBlend.png';
import './Cards.css';

const Cards = ({ author, title, description, urlToImage, publishedAt }) => {
  const getFormattedDate = (publishedAt) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); 
  };

  const renderDescription = () => {
    if (description) {
      return <p className="article-card-description">{description}</p>;
    } else {
      return (
        <p className="article-card-description">
          Description for this headline doesn't exist. Click for more details.
        </p>
      );
    }
  };
  
  const renderImage = () => {
    if (urlToImage) {
      return <img className="card-image" src={urlToImage} alt="article images" />;
    } else {
      return <img className="card-image" src={logo} alt="default image" />;
    }
  };
  
  return (
    <div className="card-link-wrapper">
      <section className="card">
        <div className="card-header">
          <h3 className="article-card-title">{title}</h3>
          <h4 className="article-card-date">
            {getFormattedDate(publishedAt)}
          </h4>
        </div>
        <div className="card-body">
          <div className="article-card-image-author">
            {renderImage()}
            {author && <p className="article-card-author">Written By: {author}</p>}
          </div>
          <div className="article-card-info">
            {renderDescription()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;


