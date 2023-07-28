import React from 'react';
import { useParams } from 'react-router-dom';
import '../DetailedView/DetailedView.css';
import { getFormattedDate, renderDescription, renderImage } from '../utilities/cleaning.js';

const DetailedView = ({ topNews }) => {
  const { index } = useParams();

  const articleIndex = parseInt(index, 10);

  const article = topNews[articleIndex];

  if (!topNews || !topNews[index]) {
    return <div>Article not found.</div>;
  }

  const { author, url, title, description, urlToImage, publishedAt, content } = article;

  return (
    <div className="article-detail">
      <h2>{title}</h2>
      <h4>{getFormattedDate(publishedAt)}</h4>
      {renderImage(urlToImage, "detailed-view-image")}
      <p className="article-author">Written By: {author}</p>
      {renderDescription(description, "detailed-view-description")} 
      <p>{content}</p>
      <a className="article-link" href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default DetailedView;
