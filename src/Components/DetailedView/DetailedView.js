import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedView = ({ topNews }) => {
  const { index } = useParams();

  const getFormattedDate = (publishedAt) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); 
  };

  const articleIndex = parseInt(index, 10);

  const article = topNews[articleIndex];

  if (!article) {
    return <div>Article not found.</div>;
  }

  const { author, title, description, urlToImage, publishedAt, content } = article;

  return (
    <div className="article-detail">
      <h2>{title}</h2>
      <h4>{getFormattedDate(publishedAt)}</h4>
      <img src={urlToImage} alt='article images' />
      {author && <p>Written By: {author}</p>}
      <p>{description}</p>
      <p>{content}</p>
    </div>
  );
};

export default DetailedView;
