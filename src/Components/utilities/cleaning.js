import logo from '../assets/NewsBlend.png';

export const getFormattedDate = (publishedAt) => {
  const date = new Date(publishedAt);
  return date.toLocaleDateString();
};

export const renderDescription = (description, className) => {
  if (description) {
    return <p className={className}>{description}</p>;
  } else {
    return (
      <p className={className}>
        Description for this headline doesn't exist. Click for more details.
      </p>
    );
  }
};

export const renderImage = (urlToImage, className) => {
  if (urlToImage) {
    return <img className={className} src={urlToImage} alt="article image" />;
  } else {
    return <img className="card-image" src={logo} alt="default image" />;
  }
};
