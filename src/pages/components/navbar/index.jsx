//nextjs
import Image from "next/image";
import Link from "next/link";
//assets
import Logo from "../../../assets/logo/logo.svg";
//local utils
import { NAV_LINKS } from "./utils";

function Navbar({ ...props }) {
  return (
    <div id="navbar" className="navbar-outer px-[14rem] pt-[3.8rem]">
      <div className="navbar-inner flex items-center justify-between rounded-[1.6rem] bg-[rgba(123,74,226,0.05)] pt-[1.215rem] pb-[1.476rem] px-[24px]">
        <div className="navbar__logo">
          <Image src={Logo} />
        </div>
        <div className="navbar__navlinks">
          {NAV_LINKS.map((navLink) => {
            return (
              <Link
                href={navLink?.url}
                className="first:font-bold first:text-[rgba(123,74,226,0.5)] text-[1.8rem] font-thin leading-[1.7rem] mr-[1.6rem] text-[rgba(255,255,255,0.5)]"
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
