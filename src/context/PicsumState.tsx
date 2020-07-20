import React, { useReducer } from "react";
import { PicsumContext } from "./picsumContext";
import { picsumReducer } from "./picsumReducer";
import { FETCH_IMAGES, TOGGLE_IMAGE } from "./types";
import { Image } from "../interfaces";

export const PicsumState: React.FC = ({ children }) => {
  const initialState = {
    images: [],
  };
  const [state, dispatch] = useReducer(picsumReducer, initialState);

  const fetchImages = async () => {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    const payload: Image[] = data.map((key: any) => {
      return {
        id: Number(key.id),
        author: key.author,
        url: key.download_url,
        like: false,
      };
    });
    dispatch({
      type: FETCH_IMAGES,
      payload,
    });
  };
  const toggleLike = (id: number) => {
    dispatch({
      type: TOGGLE_IMAGE,
      payload: id,
    });
  };

  return (
    <PicsumContext.Provider
      value={{ fetchImages, toggleLike, images: state.images }}
    >
      {children}
    </PicsumContext.Provider>
  );
};
