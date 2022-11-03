import React from 'react'
import SVG from "react-inlinesvg";
import { IconProps } from '../models/interface';



const Icon = ({
  src,
  fill,
  height,
  width,
  classNames
}: IconProps) => {
  return (
    <>
      <SVG src={src} height={height} />

    </>
  )
}

export default Icon