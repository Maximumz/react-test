import React, { useState } from 'react';

// Fix this component so that it handles a broken image properly.
const ImageLoader = () => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
    {imageError ? (
      <div>
        <p>Image failed to load</p>
      </div>
    ) : (
      <img
        src='https://invalid-url.com/image.jpg'
        alt='Broken'
        onError={handleImageError} // Handle image error
      />
    )}
  </div>
  );
};

export default ImageLoader;
