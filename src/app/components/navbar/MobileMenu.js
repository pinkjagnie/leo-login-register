import { useState } from "react";
import Link from "next/link";

import { CgMenuRound, CgCloseO } from "react-icons/cg";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      size={40}
      className="cursor-pointer"
      onClick={() => setOpenMenu(true)}
    />
  );

  const closeIcon = (
    <CgCloseO
      size={40}
      className="sticky z-40 cursor-pointer"
      onClick={() => setOpenMenu(false)}
    />
  );

  const closeMenu = () => setOpenMenu(false);

  return (
    <div className="lg:hidden">
      {openMenu ? closeIcon : hamburgerIcon}
      {openMenu && (
        <div
          className={
            openMenu
              ? "absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen meny bg-base-200 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen text-center ease-in duration-300"
          }
        >
          <ul className="w-56 font-medium text-xl">
            <li>
              <Link href="/register" onClick={() => closeMenu()}>
                Register
              </Link>
            </li>
            <li className="my-6">
              <Link href="/login" onClick={() => closeMenu()}>
                Login
              </Link>
            </li>
            <li className="my-6">
              <Link href="/protected" onClick={() => closeMenu()}>
                Protected
              </Link>
            </li>
            <li className="my-6">
              <Link href="/" onClick={() => closeMenu()}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
