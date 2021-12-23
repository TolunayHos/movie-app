import imgnotfound from "../images/imgnotfound.png";

export const imgRender = (imgPath) => {
  return imgPath
    ? `https://image.tmdb.org/t/p/original/${imgPath}`
    : imgnotfound;
};
