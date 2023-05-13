//nextjs
import Image from "next/image";
import Link from "next/link";
//local utils
import { NAV_LINKS } from "./utils";
//assets
import Logo from "@assets/logo/logo.svg";

function Navbar({ ...props }) {
  return (
    <div id="navbar" className="navbar-outer pt-[3.8rem] pb-[10.1rem]">
      <div className="navbar-inner flex items-center justify-between rounded-[1.6rem] bg-[rgba(123,74,226,0.05)] pt-[1.215rem] pb-[1.476rem] px-[24px]">
        <div className="navbar__logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="navbar__navlinks">
          {NAV_LINKS.map((navLink, index) => {
            return (
              <Link
                key={`${index}`}
                href={navLink?.url}
                className="first:font-bold first:text-primary-bg-light text-[1.8rem] font-thin leading-[1.7rem] mr-[1.6rem] text-customGrey [&:not(:first-child)]:hover:text-customGrey/100"
              >
                {navLink?.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
