/** @jsxImportSource @emotion/react */

//nextjs
import Image from "next/image";
//react
import { forwardRef } from "react";

const ImageWrapper = forwardRef(
  (
    {
      icon,
      alt,
      styles,
      tailwindStyles,
      noPointer,
      onClick,
      width,
      height,
      ...props
    },
    ref
  ) => {
    return (
      <Image
        width={width}
        height={height}
        src={icon}
        alt={alt}
        className={tailwindStyles}
        style={{ ...styles }}
        css={{ cursor: noPointer ? "inital" : "pointer" }}
        onClick={onClick}
      />
    );
  }
);

ImageWrapper.displayName = "ImageWrapper";
export default ImageWrapper;
