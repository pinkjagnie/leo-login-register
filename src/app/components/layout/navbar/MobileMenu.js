import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import useLogout from "@/hooks/useLogout";
import useLogged from "@/hooks/useLogged";

import { CgMenuRound, CgCloseO } from "react-icons/cg";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const logout = useLogout();
  // const { isLogged } = useLogged();
  const { isLoggedIn } = useAuth();

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

  const logoutHandler = () => {
    logout();
    closeMenu();
  };

  return (
    <div className="lg:hidden">
      {openMenu ? closeIcon : hamburgerIcon}
      {openMenu && (
        <div
          className={
            openMenu
              ? "absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen menu bg-base-200 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] ease-in duration-300"
          }
        >
          <ul className="w-[100%] font-medium text-xl">
            {!isLoggedIn && (
              <li>
                <Link href="/register" onClick={() => closeMenu()}>
                  Register
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li className="my-6">
                <Link href="/login" onClick={() => closeMenu()}>
                  Login
                </Link>
              </li>
            )}
            <li className="my-6">
              <Link href="/protected" onClick={() => closeMenu()}>
                Protected
              </Link>
            </li>
            {isLoggedIn && (
              <li className="my-6">
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
