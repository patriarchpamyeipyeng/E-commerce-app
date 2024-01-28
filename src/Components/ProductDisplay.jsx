import React, {useState} from 'react';
import Images from './Images';

const ProductDisplay = () => {

    const [currentImage, setCurrentImage] = useState(Images.product1);

    const handleThumbnailClick = (thumbnail) => {
        setCurrentImage(thumbnail);
    };

  return (
    <div>
      <img src={currentImage} alt="Product" />
      <div>
        {Images.thumbnails.map((thumbnail, index) => (
      <img 
      key={index}
      src={thumbnail} 
      alt={`Thumbnail ${index + 1}`} 
      onClick={() => handleThumbnailClick(thumbnail)}
      />
      ))}
      </div>
    </div>
  )
}

export default ProductDisplay
