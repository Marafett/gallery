import { createContext } from "react";
import { Image } from "../interfaces";

type ContextProps = {
  images: Image[];
  toggleLike: (id: number) => void;
  fetchImages: () => void;
};

export const PicsumContext = createContext({} as ContextProps);
