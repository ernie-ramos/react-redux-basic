import React from 'react';

const ImageList = ({ images }) => {
  const imageURLs = images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{imageURLs}</div>;
};

export default ImageList;
