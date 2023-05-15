/** @jsxImportSource @emotion/react */

//nextjs
import Image from "next/image";
//libs



function index({ icon, alt, styles, tailwindStyles, noPointer,onClick, ...props }) {

  return (
    <Image
      src={icon}
      alt={alt}
      className={...tailwindStyles}
      style={{ ...styles }}
      css={{ cursor:noPointer ? 'inital':'pointer' }}
      onClick={onClick}
    />
  );
}

export default index;
