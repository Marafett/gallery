import React, { useContext } from "react";
import { PicsumContext } from "../context/picsumContext";
import { Image } from "../interfaces";
import { ImageList } from "../components/ImageList";

export const FavoritesPage: React.FC = () => {
  const { images } = useContext(PicsumContext);
  return (
    <div className="row">
      {images.map((image: Image) => {
        if (image.like) {
          return <ImageList image={image} key={image.id} />;
        } 
      })}
    </div>
  );
};
