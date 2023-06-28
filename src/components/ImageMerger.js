import React, { useEffect, useState } from 'react';
import mergeImages from 'merge-images';

const ImageMerger = ({ image1, image2 }) => {
  const [mergedImage, setMergedImage] = useState('');

  useEffect(() => {
    const mergeImagesAsync = async () => {
      try {
        const merged = await mergeImages(
        [
            { src: image1, x: 0, y: 0 }, // First image at position (0, 0)
            { src: image2, x: 100, y: 0 }, // Second image at position (10, 10)
          ],
          { width: 400, height: 500 }
        );
        setMergedImage(merged);
      } catch (error) {
        console.error('Error merging images:', error);
      }
    };

    mergeImagesAsync();
  }, [image1, image2]);

  return (
    <div>
      <h1>Image Merger</h1>
      {mergedImage ? (
        <img src={mergedImage} alt="Merged Image" />
      ) : (
        <p>Merging images...</p>
      )}
    </div>
  );
};

export default ImageMerger