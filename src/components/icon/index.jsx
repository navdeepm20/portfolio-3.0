/** @jsxImportSource @emotion/react */

//nextjs
import Image from "next/image";
//libs



function index({ icon, alt, styles, tailwindStyles, ...props }) {

  return (
    <Image
      src={icon}
      alt={alt}
      className={...tailwindStyles}
      style={{ ...styles }}
      css={{ "&:hover path":{
      stroke:'red !important'
      } }}
    />
  );
}

export default index;
