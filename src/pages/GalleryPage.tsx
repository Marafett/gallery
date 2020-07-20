import React, { useContext, useEffect } from "react";
import { PicsumContext } from "../context/picsumContext";
import { ImageList } from "../components/ImageList";
import { Image } from "../interfaces";

export const GalleryPage: React.FC = () => {
  const { fetchImages, images } = useContext(PicsumContext);
  useEffect(() => {
    if (!images.length) {
      fetchImages();
    }
  }, []);

  return (
    <div className="row">
      {images.map((image: Image) => {
        return <ImageList image={image} key={image.id} />;
      })}
    </div>
  );
};
