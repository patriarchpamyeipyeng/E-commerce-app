import React, {useState} from 'react';
import Images from './Images';


const Products = () => {

    const [currentImage, setCurrentImage] = useState(Images.producti[0]);

    const handleThumbnailClick = (index) => {
        setCurrentImage(Images.producti[index]);
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
      onClick={() => handleThumbnailClick(index)}
      />
      ))}
      </div>
    </div>
  )
}

export default Products
