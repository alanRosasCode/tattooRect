// src/components/Gallery.jsx

import imagesData from "../data/imagesData.js";

const Gallery = () => {
  return (
    <div className="gallery-container">
      {imagesData.map((image) => (
        <div className="gallery-item" key={image.id}>
          <img src={image.url} alt={image.title} />
          <p className="image-title">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
