import React from "react";

type MyPhotoPropsType = {
  style: any;
};

export const MyPhoto = ({ style }: MyPhotoPropsType) => {
  return <div className={style.photo} style={style}></div>;
};
