/** @jsxImportSource @emotion/react */

//nextjs
import Image from "next/image";
//react
import { forwardRef } from "react";

const ImageWrapper = forwardRef(
  (
    { icon, alt, styles, tailwindStyles, noPointer, onClick, ...props },
    ref
  ) => {
    return (
      <Image
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
