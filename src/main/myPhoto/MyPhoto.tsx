import React from 'react'

type MyPhotoPropsType = {
  style?: React.CSSProperties
  photoClassName?: string
}

export const MyPhoto = ({ style, photoClassName }: MyPhotoPropsType) => {
  return <div className={photoClassName} style={style}></div>
}
