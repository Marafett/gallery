import React, { useContext } from "react";
import { PicsumContext } from "../context/picsumContext";
import { ImageProps } from "../interfaces";

export const ImageList: React.FC<ImageProps> = ({ image }) => {
  const { toggleLike } = useContext(PicsumContext);
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img className="img-size" src={image.url} />
          <a
            className="btn-floating halfway-fab waves-effect blue darken-3"
            onClick={() => toggleLike(image.id)}
          >
            {image.like ? (
              <img
                className="img-heart"
                src="https://img.icons8.com/emoji/100/000000/red-heart.png"
              />
            ) : (
              <i className="material-icons">add</i>
            )}
          </a>
        </div>
        <div className="card-content">
          <p className="cordial">
            <span>{image.author}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
