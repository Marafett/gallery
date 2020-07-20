export interface Image {
  id: number;
  author: string;
  url: string;
  like: boolean;
}

export interface ImageProps {
  image: Image;
}
