import React from 'react';
import { useParams } from 'react-router-dom';
import '../DetailedView/DetailedView.css';

const DetailedView = ({ topNews }) => {
  const { index } = useParams();

  console.log("Index:", index); 
  console.log("Top news:", topNews);

  const getFormattedDate = (publishedAt) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); 
  };

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
      <img src={urlToImage} alt='article images' />
      {author && <p>Written By: {author}</p>}
      <p>{description}</p>
      <p>{content}</p>
      <a className="article-link"href={url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default DetailedView;
