import { FETCH_IMAGES, TOGGLE_IMAGE } from "./types";

const handlers: any = {
  [FETCH_IMAGES]: (state: any, { payload }: any) => ({
    ...state,
    images: payload,
  }),
  [TOGGLE_IMAGE]: (state: any, { payload }: any) => ({
    ...state,
    images: state.images.map((image: any) => {
      if (image.id === payload) {
        return { ...image, like: !image.like };
      }
      return image;
    }),
  }),
  DEFAULT: (state: any) => state,
};

export const picsumReducer = (state: any, action: any) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
