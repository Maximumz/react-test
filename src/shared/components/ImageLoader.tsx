import React from 'react';

// Fix this component so that it handles a broken image properly.
const ImageLoader = () => {
  return (
    <img
      src='https://invalid-url.com/image.jpg'
      alt='Broken'
      onError={(e) => console.log('Image failed to load')}
    />
  );
};

export default ImageLoader;
